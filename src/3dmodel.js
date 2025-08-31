/**
 * @github_username
 * Time :   31
 * Location : src/3dmodel.js
 * Description : In this file, we define a ModelMaker class for creating 3D models.
 */
/* *********************Code_start_here******************** */
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
    initial = { rotation: { x: 0.065, y: 4.56, z: 0 }, cameraAxis: { x: 0, y: 1.6, z: 46 }, metalness: 1, roughness: 0.28, modelName: "model" }
  ) {
    // Canvases can be selector string or array-like of elements
    this.canvases = typeof canvases === "string" ? document.querySelectorAll(canvases) : canvases;
    this.refImage = typeof refImage === "string" ? document.querySelector(refImage) : refImage;
    this.context = context;
    this.environment = typeof environmentUri === "string" ? environmentUri : `public/assets/models/environment.hdr`;
    this.modelUri = typeof modelUri === "string" ? modelUri : `public/assets/models/${initial.modelName || "model"}.gltf`;
    this.pages = document.querySelectorAll(".has-path");
    // If no canvas exists → create one
    if (!this.canvases || this.canvases.length === 0) {
      this.canvases = [this._createCanvasAboveImage()];
    }

    this.initialSetup = {
      rotation: { x: initial.rotation.x, y: initial.rotation.y, z: initial.rotation.z },
      cameraAxis: { x: initial.cameraAxis.x, y: initial.cameraAxis.y, z: initial.cameraAxis.z },
      metalness: initial.metalness,
      roughness: initial.roughness,
    };

    this.scenes = [];
    this.cameras = [];
    this.renderers = [];
    this.models = [];

    this.gltfLoader = new GLTFLoader();
    this.rgbeLoader = new RGBELoader();
    this.textureLoader = new THREE.TextureLoader();
    this.dracoLoader = new DRACOLoader();

    this.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");
    this.gltfLoader.setDRACOLoader(this.dracoLoader);

    this.setupScrollAnimation();
    // this.initCanvas();
    // this.animate();
  }

  /** Creates canvas just above the reference image */
  _createCanvasAboveImage() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none"; // so clicks pass through if needed
    canvas.classList.add("model-maker-canvas");

    // Wrap refImage in relative container (if not already positioned)
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.display = "inline-block";

    this.refImage.parentNode.insertBefore(wrapper, this.refImage);
    wrapper.appendChild(this.refImage);
    wrapper.appendChild(canvas);

    this.referenceWrapper = wrapper;
    return canvas;
  }

  /** Main setup → ensures canvas tracks reference image size */
  async setupCanvasSizeAsync() {
    const refImage = this.refImage;
    // wait until refImage fully loaded
    const waitForImageLoad = () =>
      new Promise((resolve) => {
        if (!refImage) return resolve();
        if (refImage.complete && refImage.naturalWidth > 0) return resolve();

        refImage.addEventListener("load", () => resolve(), { once: true });
      });

    await waitForImageLoad();

    const updateCanvasSize = () => {
      const rect = refImage.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      this.canvases.forEach((canvas) => {
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      });
    };
    // initial set
    updateCanvasSize();
    // clean old observer
    if (this.resizeObserver) this.resizeObserver.disconnect();
    // watch for size changes
    this.resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateCanvasSize);
    });
    this.resizeObserver.observe(refImage);
  }

  // Initialize canvas with scenes, cameras, and loaders
  async initCanvas() {
    await this.setupCanvasSizeAsync();

    this.canvases.forEach((canvas, i) => {
      const scene = new THREE.Scene();
      this.scenes.push(scene);

      const hdrPromise = new Promise((resolve, reject) => {
        this.rgbeLoader.load(
          `${this.environment}`,
          (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
            resolve();
          },
          undefined,
          (error) => reject(error)
        );
      });

      const camera = new THREE.PerspectiveCamera(10, canvas.width / canvas.height, 0.01, 100);
      camera.position.set(this.initialSetup.cameraAxis.x, this.initialSetup.cameraAxis.y, this.initialSetup.cameraAxis.z);
      camera.lookAt(0, 0, 0);
      this.cameras.push(camera);

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
      renderer.setSize(canvas.width, canvas.height);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderers.push(renderer);

      this.loadModel(i, canvas, hdrPromise);
    });
  }

  // Load model and HDR assets
  async loadModel(index, canvas, hdrPromise) {
    // const modelPath = `${mediathemeUri}images/models/model.gltf`;
    const modelPath = this.modelUri;
    const texturePath = '/assets/models/LOL-Label-cherry.webp';

    if (!texturePath) {
      console.error("Texture Path not found");
      return;
    }

    const texture = this.textureLoader.load(texturePath);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = false;

    const modelPromise = new Promise((resolve, reject) => {
      this.gltfLoader.load(
        modelPath,
        (gltf) => {
          const model = gltf.scene;
          this.models[index] = { model };

          model.rotation.set(this.initialSetup.rotation.x, this.initialSetup.rotation.y, this.initialSetup.rotation.z);

          model.traverse((child) => {
            if (child.isMesh) {
              if (child.material.name === "Body") {
                child.material.map = texture;
                child.material.needsUpdate = true;
                child.material.metalness = this.initialSetup.metalness;
                child.material.roughness = this.initialSetup.roughness;
              } else if (child.material.name === "Silver") {
                child.material.metalness = 1;
                child.material.roughness = 0.17;
                child.material.envMapIntensity = 1;
                child.material.needsUpdate = true;
              }
            }
          });

          this.scenes[index].add(model);
          resolve();
        },
        undefined,
        (error) => reject(error)
      );
    });

    try {
      await Promise.all([hdrPromise, modelPromise]);
      this.updateCameras();
    } catch (error) {
      console.error("Error loading assets:", error);
    }
  }

    // Setup scroll-based animations
  setupScrollAnimation(settings = {}) {
    // Default settings (fallback)
    const defaultSettings = {
      rotationPerSection: Math.PI * 2,
      startPoint: "top top",
      endPoint: "bottom top",
      // noAnimationForFirstSectionOnMobile: false,
      frontViewValue: 2,
    };
  
    // Merge passed settings with defaults
    const {
      rotationPerSection,
      noAnimationForFirstSectionOnMobile,
      frontViewValue,
    } = { ...defaultSettings, ...settings };
  
    // Update front view value dynamically based on window size
    this.initialSetup.rotation.y = frontViewValue;
  
    // Clear existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  
    // const firstSectionHeight = this.pages[0]?.getBoundingClientRect()?.height || 0;
    let start = "top top";
    let end = "bottom top";
  
    // Setup ScrollTrigger for each section
    this.pages.forEach((section, index) => {
      // if (this.isHome && !this.isMobile) {
      //   start = "top center";
      //   end = "bottom center";
      // }
      // if (this.isHome && this.isMobile) {
      //   start = "top 90%";
      //   end = "bottom center";
      // }
  
      // if (index === 0 && this.isHome && !this.isMobile) {
      //   start = `top ${firstSectionHeight * 0.45}px`;
      //   end = `bottom ${firstSectionHeight * 0.45}px`;
      // }
      // if (this.isMobile && index === 0 && noAnimationForFirstSectionOnMobile) {
      //   return;
      // }
      // ScrollTrigger for each section
      ScrollTrigger.create({
        trigger: section,
        start,
        end,
        scrub: 2,
        onUpdate: (trigger) => {
          const progress = trigger.progress;
          // if (this.isMobile) {
            // Rotate only the active section
            if (trigger.isActive) {
              const model = this.models[index]?.model;
              if (model) {
                model.rotation.y = frontViewValue + rotationPerSection * index + progress * rotationPerSection;
              }
            // }
          } else {
            // Rotate all sections together on desktop
            this.initialSetup.rotation.y = frontViewValue + rotationPerSection * index + progress * rotationPerSection;
            this.updateModels();
          }
        },
      });
    });
  }
  
  // Update cameras with current settings
  updateCameras() {
    this.cameras.forEach((camera, index) => {
      camera.position.set(this.initialSetup.cameraAxis.x, this.initialSetup.cameraAxis.y, this.initialSetup.cameraAxis.z);
      camera.lookAt(this.scenes[index].children[0]?.position || new THREE.Vector3(0, 0, 0));
      camera.updateProjectionMatrix();
    });
  }

  // Update models with current rotation
  updateModels() {
    this.models.forEach(({ model }) => {
      if (model) {
        model.rotation.set(this.initialSetup.rotation.x, this.initialSetup.rotation.y, this.initialSetup.rotation.z);
      }
    });
  }
  
  

  // Animation loop
  animate() {
    requestAnimationFrame(() => this.animate());
    this.renderers.forEach((renderer, index) => {
      renderer.render(this.scenes[index], this.cameras[index]);
    });
  }

}

/* *********************Code_end_here******************** */
export default ModelMaker;




// Example usage:
const modelMaker = new ModelMaker(".model-maker-canvas", ".main-img");
modelMaker.setupCanvasSizeAsync().then(() => {
  modelMaker.initCanvas();
  modelMaker.animate();
});