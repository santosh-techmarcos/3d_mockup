import * as THREE from "three";
import { DRACOLoader, GLTFLoader, RGBELoader } from "three/examples/jsm/Addons.js";
import {gsap} from "./script.js";
class ModelMaker {
  constructor({
    canvas,
    refImage,
    environmentUri = "./assets/models/environment.hdr",
    modelUri = "./assets/models/model.gltf",
    initial = {
      rotation: { x: 0.065, y: 4.56, z: 0 },
      cameraAxis: { x: 0, y: 1.6, z: 46 },
      metalness: 1,
      roughness: 0.19,
    },
  }) {
    this.canvas =
      typeof canvas === "string" ? document.querySelector(canvas) : canvas;
    this.refImage =
      typeof refImage === "string"
        ? document.querySelector(refImage)
        : refImage;

    this.environmentUri = environmentUri;
    this.modelUri = modelUri;
    this.initial = initial;

    this.scene = new THREE.Scene();
    this.camera = null;
    this.renderer = null;
    this.model = null;
    this.bodyMeshes = [];

    // loaders
    this.gltfLoader = new GLTFLoader();
    this.rgbeLoader = new RGBELoader();
    this.textureLoader = new THREE.TextureLoader();
    this.dracoLoader = new DRACOLoader();
    this.dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
    );
    this.gltfLoader.setDRACOLoader(this.dracoLoader);

    this.animate = this.animate.bind(this);
  }

  async init() {
    this.canvas = this.canvas || this._createCanvasAboveImage();
    await this._setupCanvasSize();
    await this._setupEnvironment();
    this._setupCamera();
    this._setupRenderer();
    await this._loadModel();
    this.animate();
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

  async _setupCanvasSize() {
    const refImage = this.refImage;

    const waitForImageLoad = () =>
      new Promise((resolve) => {
        if (!refImage) return resolve();
        if (refImage.complete && refImage.naturalWidth > 0) return resolve();
        refImage.addEventListener("load", () => resolve(), { once: true });
      });

    await waitForImageLoad();

    const rect = refImage
      ? refImage.getBoundingClientRect()
      : { width: window.innerWidth, height: window.innerHeight };

    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;
  }

  async _setupEnvironment() {
    return new Promise((resolve) => {
      this.rgbeLoader.load(
        this.environmentUri,
        (texture) => {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          this.scene.environment = texture;
          this.scene.environmentIntensity = 1.2;
          resolve();
        },
        undefined,
        () => resolve()
      );
    });
  }

  _setupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      10,
      this.canvas.width / Math.max(1, this.canvas.height),
      0.01,
      100
    );
    this.camera.position.set(
      this.initial.cameraAxis.x,
      this.initial.cameraAxis.y,
      this.initial.cameraAxis.z
    );
    this.camera.lookAt(0, 0, 0);
  }

  _setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  }

  async _loadModel() {
    return new Promise((resolve, reject) => {
      this.gltfLoader.load(
        this.modelUri,
        (gltf) => {
          this.model = gltf.scene;
          this.model.rotation.set(
            this.initial.rotation.x,
            this.initial.rotation.y,
            this.initial.rotation.z
          );

          this.model.traverse((child) => {
            if (child.isMesh && child.material.name === "Body") {
              child.material.metalness = this.initial.metalness;
              child.material.roughness = this.initial.roughness;
              child.castShadow = true;
              child.receiveShadow = true;
              this.bodyMeshes.push(child);
            }
          });

          this.scene.add(this.model);
          resolve();
        },
        undefined,
        (error) => reject(error)
      );
    });
  }

  // 🔹 Function to change texture dynamically (can be GSAP-controlled)
  // 🔹 Crossfade Texture Function
  changeTextureCrossfade(texturePath, duration = 1) {
    console.log("Crossfading to:", texturePath);

    this.textureLoader.load(
      texturePath,
      (newTexture) => {
        newTexture.colorSpace = THREE.SRGBColorSpace;
        newTexture.flipY = false;
        newTexture.needsUpdate = true;

        this.bodyMeshes.forEach((mesh) => {
          if (mesh && mesh.material && mesh.material.name === "Body") {
            // Keep old texture as "map"
            const oldTexture = mesh.material.map;

            // Add new texture to emissiveMap (second slot)
            mesh.material.emissiveMap = newTexture;
            // mesh.material.emissive.set(0xffffff); // make emissive visible
            mesh.material.needsUpdate = true;

            // Start with emissiveMap hidden
            mesh.material.emissiveIntensity = 0;

            // 🔹 Crossfade with GSAP
            gsap.to(mesh.material, {
              emissiveIntensity: 1,
              duration,
              ease: "power2.inOut",
              onComplete: () => {
                // Replace old with new
                mesh.material.map = newTexture;
                mesh.material.emissiveMap = null;
                mesh.material.emissiveIntensity = 0;

                if (oldTexture) oldTexture.dispose();
                mesh.material.needsUpdate = true;
              },
            });
          }
        });
      },
      undefined,
      (err) => console.error("❌ Failed to load texture:", err)
    );
  }


  updateRotation(rotation) {
    // this.models.forEach((entry) => {
    //   if (entry && entry.model) {
        this.model.rotation.set(rotation.x, rotation.y, rotation.z);
      // }
    // });
  }

  animate() {
    requestAnimationFrame(this.animate);
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}

export default ModelMaker;
