/**
 * src/3dmodel.js
 * ModelMaker — supports per-section textures via `data-texture-uri` on each `.has-path` section.
 */
import * as THREE from "three";
import { DRACOLoader, GLTFLoader, RGBELoader } from "three/examples/jsm/Addons.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

class ModelMaker {
  constructor(
    canvases,
    refImage,
    context,
    environmentUri,
    modelUri,
    initial = {
      rotation: { x: 0.065, y: 4.56, z: 0 },
      cameraAxis: { x: 0, y: 1.6, z: 46 },
      metalness: 1,
      roughness: 0.28,
      modelName: "model",
    }
  ) {
    // canvases can be selector string or NodeList/array
    this.canvases =
      typeof canvases === "string" ? document.querySelectorAll(canvases) : canvases;
    this.refImage = typeof refImage === "string" ? document.querySelector(refImage) : refImage;
    this.context = context;
    this.environment = typeof environmentUri === "string" ? environmentUri : `./assets/models/environment.hdr`;
    this.modelUri = typeof modelUri === "string" ? modelUri : `./assets/models/${initial.modelName || "model"}.gltf`;

    // sections to observe for texture swap; elements with class .has-path
    this.pages = Array.from(document.querySelectorAll(".has-path"));

    // if no canvas existent, create one above ref image
    if (!this.canvases || this.canvases.length === 0) {
      this.canvases = [this._createCanvasAboveImage()];
    }

    this.initialSetup = {
      rotation: { x: initial.rotation.x, y: initial.rotation.y, z: initial.rotation.z },
      cameraAxis: {
        x: initial.cameraAxis.x,
        y: initial.cameraAxis.y,
        z: initial.cameraAxis.z,
      },
      metalness: initial.metalness,
      roughness: initial.roughness,
    };

    this.scenes = [];
    this.cameras = [];
    this.renderers = [];
    this.models = []; // { model, bodyMeshes: [mesh, ...], currentTexture }

    // loaders
    this.gltfLoader = new GLTFLoader();
    this.rgbeLoader = new RGBELoader();
    this.textureLoader = new THREE.TextureLoader();
    this.dracoLoader = new DRACOLoader();

    this.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");
    this.gltfLoader.setDRACOLoader(this.dracoLoader);

    // bind
    this.animate = this.animate.bind(this);

    // initialize (user will call initCanvas()/setupCanvasSizeAsync externally — but safe to call from constructor if desired)
    this._started = false;
  }

  _createCanvasAboveImage() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.classList.add("model-maker-canvas");

    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.display = "inline-block";

    if (this.refImage && this.refImage.parentNode) {
      this.refImage.parentNode.insertBefore(wrapper, this.refImage);
      wrapper.appendChild(this.refImage);
      wrapper.appendChild(canvas);
      this.referenceWrapper = wrapper;
    } else {
      // fallback: append to body
      document.body.appendChild(canvas);
    }

    return canvas;
  }

  async setupCanvasSizeAsync() {
    const refImage = this.refImage;
    const waitForImageLoad = () =>
      new Promise((resolve) => {
        if (!refImage) return resolve();
        if (refImage.complete && refImage.naturalWidth > 0) return resolve();
        refImage.addEventListener("load", () => resolve(), { once: true });
      });

    await waitForImageLoad();

    const updateCanvasSize = () => {
      const rect = refImage ? refImage.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
      const width = rect.width;
      const height = rect.height;

      this.canvases.forEach((canvas) => {
        // only update if changed to avoid resets
        if (canvas.width !== Math.floor(width) || canvas.height !== Math.floor(height)) {
          canvas.width = Math.floor(width);
          canvas.height = Math.floor(height);
          canvas.style.width = `${width}px`;
          canvas.style.height = `${height}px`;
        }
      });

      // update cameras' aspect
      this.cameras.forEach((camera, i) => {
        const canvas = this.canvases[i];
        if (canvas && camera) {
          camera.aspect = canvas.width / Math.max(1, canvas.height);
          camera.updateProjectionMatrix();
          if (this.renderers[i]) this.renderers[i].setSize(canvas.width, canvas.height, false);
        }
      });
    };

    // initial
    updateCanvasSize();

    if (this.resizeObserver) this.resizeObserver.disconnect();
    this.resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateCanvasSize);
    });
    if (refImage) this.resizeObserver.observe(refImage);
    else this.resizeObserver.observe(document.body);
  }

  async initCanvas() {
    // avoid double init
    if (this._started) return;
    this._started = true;

    await this.setupCanvasSizeAsync();

    // load scenes per canvas
    for (let i = 0; i < this.canvases.length; i++) {
      const canvas = this.canvases[i];
      const scene = new THREE.Scene();
      this.scenes.push(scene);

      // load HDR and set env on scene (promise)
      const hdrPromise = new Promise((resolve, reject) => {
        if (!this.environment) return resolve();
        this.rgbeLoader.load(
          this.environment,
          (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
            resolve();
          },
          undefined,
          (err) => {
            console.warn("HDR load failed:", err);
            resolve(); // continue even if HDR fail
          }
        );
      });

      // camera
      const camera = new THREE.PerspectiveCamera(10, canvas.width / Math.max(1, canvas.height), 0.01, 100);
      camera.position.set(this.initialSetup.cameraAxis.x, this.initialSetup.cameraAxis.y, this.initialSetup.cameraAxis.z);
      camera.lookAt(0, 0, 0);
      this.cameras.push(camera);

      // renderer
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
      renderer.setSize(canvas.width, canvas.height);
      // modern color space handling
      if (renderer.outputColorSpace !== undefined) {
        renderer.outputColorSpace = THREE.SRGBColorSpace;
      } else {
        renderer.gammaOutput = true;
      }
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderers.push(renderer);

      // load model for this canvas index
      await this.loadModel(i, canvas, hdrPromise);
    }

    // once models loaded, start texture-section linkage
    this._setupSectionTextureObserver();

    // update cameras just in case
    this.updateCameras();

    // start render loop
    this.animate();
  }

  // helper: load texture promise
  _loadTexturePromise(uri) {
    return new Promise((resolve, reject) => {
      if (!uri) return reject(new Error("No texture URI"));
      this.textureLoader.load(
        uri,
        (tex) => {
          // ensure SRGB for color textures
          tex.colorSpace = THREE.SRGBColorSpace || tex.colorSpace;
          tex.flipY = false;
          resolve(tex);
        },
        undefined,
        (err) => reject(err)
      );
    });
  }

  async loadModel(index, canvas, hdrPromise) {
    const modelPath = this.modelUri;

    // fallback default texture (if any) — try to read first section's data-texture-uri as initial
    let defaultTextureUri = null;
    if (this.pages && this.pages.length && this.pages[0].dataset && this.pages[0].dataset.textureUri) {
      defaultTextureUri = this.pages[0].dataset.textureUri;
    } else {
      // keep existing default path if you want
      defaultTextureUri = "./assets/models/LOL-Label-cherry.webp";
    }

    // create holders for this index
    this.models[index] = { model: null, bodyMeshes: [], currentTexture: null };

    // pre-load the default texture (if available)
    let defaultTexture = null;
    try {
      defaultTexture = await this._loadTexturePromise(defaultTextureUri);
    } catch (e) {
      console.warn("Default texture failed to load:", defaultTextureUri, e);
      defaultTexture = null;
    }

    const modelPromise = new Promise((resolve, reject) => {
      this.gltfLoader.load(
        modelPath,
        (gltf) => {
          const model = gltf.scene;
          model.rotation.set(this.initialSetup.rotation.x, this.initialSetup.rotation.y, this.initialSetup.rotation.z);

          // collect body meshes and apply default texture to materials named "Body"
          const bodyMeshes = [];
          model.traverse((child) => {
            if (child.isMesh) {
              // ensure material is MeshStandardMaterial-like
              if (child.material) {
                // Clone material so we don't accidentally overwrite shared materials between instances
                child.material = child.material.clone();

                if (child.material.name === "Body") {
                  if (defaultTexture) {
                    child.material.map = defaultTexture;
                    child.material.needsUpdate = true;
                  }
                  child.material.metalness = this.initialSetup.metalness;
                  child.material.roughness = this.initialSetup.roughness;
                  bodyMeshes.push(child);
                } else if (child.material.name === "Silver") {
                  child.material.metalness = 1;
                  child.material.roughness = 0.17;
                  child.material.envMapIntensity = 1;
                  child.material.needsUpdate = true;
                }
              }
            }
          });

          this.scenes[index].add(model);
          this.models[index].model = model;
          this.models[index].bodyMeshes = bodyMeshes;
          this.models[index].currentTexture = defaultTexture || null;
          resolve();
        },
        undefined,
        (error) => {
          console.error("GLTF load error:", error);
          reject(error);
        }
      );
    });

    try {
      await Promise.all([hdrPromise, modelPromise]);
      // done
      this.updateCameras();
    } catch (error) {
      console.error("Error loading assets:", error);
    }
  }

  // Swap texture on model's "Body" meshes for a given texture URI
  async swapTextureForAllModels(newTextureUri) {
    if (!newTextureUri) return;

    try {
      const newTexture = await this._loadTexturePromise(newTextureUri);

      // apply to each model index
      this.models.forEach((entry) => {
        if (!entry || !entry.bodyMeshes) return;

        // dispose previous texture if it exists and is different
        if (entry.currentTexture && entry.currentTexture !== newTexture) {
          try {
            entry.currentTexture.dispose();
          } catch (e) {}
        }

        // assign new texture to each body mesh and mark needsUpdate
        entry.bodyMeshes.forEach((mesh) => {
          if (mesh && mesh.material) {
            mesh.material.map = newTexture;
            mesh.material.needsUpdate = true;
          }
        });

        entry.currentTexture = newTexture;
      });
    } catch (e) {
      console.warn("Failed to load new texture:", newTextureUri, e);
    }
  }

  // Setup IntersectionObserver to watch .has-path sections and read their data-texture-uri attribute
  _setupSectionTextureObserver() {
    // if no pages, nothing to do
    if (!this.pages || this.pages.length === 0) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.45, 0.5, 0.6], // mid-area thresholds to detect "active" section
    };

    // keep a pointer to currently applied texture URI to avoid thrashing
    this._currentSectionTextureUri = null;

    const onIntersect = (entries) => {
      // prefer the entry with largest intersectionRatio among isIntersecting
      let best = null;
      entries.forEach((ent) => {
        if (!ent.isIntersecting) return;
        if (!best || ent.intersectionRatio > best.intersectionRatio) best = ent;
      });

      if (!best) return;

      const sec = best.target;
      const tex = sec.dataset ? sec.dataset.textureUri || sec.dataset.textureUri : null;

      // if the section has no texture attribute, we skip (or fallback)
      if (!tex) return;

      if (this._currentSectionTextureUri !== tex) {
        this._currentSectionTextureUri = tex;
        // smooth swap (you can add fade animation by changing material opacity if needed)
        this.swapTextureForAllModels(tex);
      }
    };

    // create observer (single observer for all sections)
    this._sectionObserver = new IntersectionObserver(onIntersect, options);

    this.pages.forEach((p) => {
      this._sectionObserver.observe(p);
    });
  }

  // Setup scroll-based animation placeholder — preserved behavior
  setupScrollAnimation(settings = {}) {
    const defaultSettings = {
      rotationPerSection: Math.PI * 2,
      startPoint: "top top",
      endPoint: "bottom top",
      frontViewValue: 2,
    };

    const { rotationPerSection, frontViewValue } = { ...defaultSettings, ...settings };

    this.initialSetup.rotation.y = frontViewValue;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    const start = settings.startPoint || defaultSettings.startPoint;
    const end = settings.endPoint || defaultSettings.endPoint;

    // If you want to use per-section scroll triggers to rotate the model, keep that logic.
    // We'll create ScrollTriggers for each section that update the related model rotation when active.
    this.pages.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start,
        end,
        scrub: 2,
        onUpdate: (trigger) => {
          const progress = trigger.progress;
          // if (this.isMobile) {
            if (trigger.isActive) {
              const model = this.models[index]?.model;
              if (model) {
                model.rotation.y = frontViewValue + rotationPerSection * index + progress * rotationPerSection;
              }
            }
          // } else {
            // Rotate all sections together on desktop
            this.initialSetup.rotation.y = frontViewValue + rotationPerSection * index + progress * rotationPerSection;
            this.updateModels();
          // }
        },
      });
    });
  }

  updateCameras() {
    this.cameras.forEach((camera, index) => {
      camera.position.set(this.initialSetup.cameraAxis.x, this.initialSetup.cameraAxis.y, this.initialSetup.cameraAxis.z);
      camera.lookAt(this.scenes[index].children[0]?.position || new THREE.Vector3(0, 0, 0));
      camera.updateProjectionMatrix();
    });
  }

  updateModels() {
    this.models.forEach((entry) => {
      if (entry && entry.model) {
        entry.model.rotation.set(this.initialSetup.rotation.x, this.initialSetup.rotation.y, this.initialSetup.rotation.z);
      }
    });
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.renderers.forEach((renderer, index) => {
      const scene = this.scenes[index];
      const camera = this.cameras[index];
      if (scene && camera && renderer) {
        renderer.render(scene, camera);
      }
    });
  }
}

// export default ModelMaker;

/* Example usage (in your app entry file, unchanged GSAP code remains separate):
   - Add data-texture-uri="/path/to/texture.webp" to each .has-path section in HTML.
   - Instantiate and initialize ModelMaker:

*/
const modelMaker = new ModelMaker(".model-maker-canvas", ".main-img", null, "./assets/models/environment.hdr", "./assets/models/model.gltf");
modelMaker.setupCanvasSizeAsync().then(() => {
  modelMaker.initCanvas();
  // Optional: pass settings if you use internal setupScrollAnimation
  modelMaker.setupScrollAnimation({ rotationPerSection: (Math.PI * 4), frontViewValue: 4.6 });
});
