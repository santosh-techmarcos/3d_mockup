import { THREE, DRACOLoader, GLTFLoader, RGBELoader } from "./script.js";

class ModelMaker {
  constructor({
    canvas = null,
    refImage = null,
    environmentUri = "./assets/models/environment.hdr",
    modelUri = "./assets/models/model.gltf",
    fov = 45,
    cameraPosition = { x: 0, y: 0, z: 6 },
    isFullWindow = false,
  }) {
    this.canvas = typeof canvas === "string" ? document.querySelector(canvas) : canvas;
    this.refImage = typeof refImage === "string" ? document.querySelector(refImage) : refImage;

    this.environmentUri = environmentUri;
    this.modelUri = modelUri;
    this.fov = fov;
    this.cameraPosition = cameraPosition;
    this.isFullWindow = isFullWindow;

    // Core
    this.scene = new THREE.Scene();
    this.camera = null;
    this.renderer = null;
    this.modelTemplate = null; // <-- Base model loaded once
    this.bodyMeshes = [];

    // Loaders
    this.gltfLoader = new GLTFLoader();
    this.rgbeLoader = new RGBELoader();
    this.textureLoader = new THREE.TextureLoader();
    this.dracoLoader = new DRACOLoader();
    this.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");
    this.gltfLoader.setDRACOLoader(this.dracoLoader);

    this.animate = this.animate.bind(this);
  }

  async init() {
    // Setup canvas
    if (!this.canvas) {
      this.canvas = this._createCanvas(); // merged creation logic
    }

    await this._setupCanvasSize();
    await this._setupEnvironment();
    this._setupCamera();
    this._setupRenderer();

    // 🚫 Do NOT load model here anymore
    this.animate();
  }
  _createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = this.refImage ? "none" : "auto";
    canvas.classList.add("model-maker-canvas");

    let container;

    // 1️⃣ User provided parent container
    if (this.refParent) {
      container = typeof this.refParent === "string" ? document.querySelector(this.refParent) : this.refParent;
      container.style.position = "relative";
      container.appendChild(canvas);
    } 
    // 2️⃣ Reference image exists
    else if (this.refImage) {
      container = document.createElement("div");
      container.style.position = "relative";
      container.style.display = "inline-block";

      this.refImage.parentNode.insertBefore(container, this.refImage);
      container.appendChild(this.refImage);
      container.appendChild(canvas);
      this.referenceWrapper = container;
    } 
    // 3️⃣ Full window fallback
    else if (this.isFullWindow) {
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      document.body.appendChild(canvas);
    } 
    // 4️⃣ Default fallback
    else {
      document.body.appendChild(canvas);
    }

    return canvas;
  }

  async _setupCanvasSize() {
    const updateSize = () => {
      let width, height;

      if (this.refParent) {
        const rect = this.refParent.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
      } else if (this.refImage) {
        const rect = this.refImage.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
      } else {
        width = window.innerWidth;
        height = window.innerHeight;
      }

      const pixelRatio = window.devicePixelRatio || 1;

      // Set physical canvas size
      this.canvas.width = width * pixelRatio;
      this.canvas.height = height * pixelRatio;

      // Set CSS size
      this.canvas.style.width = `${width}px`;
      this.canvas.style.height = `${height}px`;

      // Update camera
      if (this.camera) {
        this.camera.aspect = width / Math.max(1, height);
        this.camera.updateProjectionMatrix();
      }

      // Update renderer
      if (this.renderer) {
        this.renderer.setPixelRatio(pixelRatio);
        this.renderer.setSize(width, height, false);
      }
    };

    // Wait for image to load
    const waitForImageLoad = () =>
      new Promise((resolve) => {
        if (!this.refImage) return resolve();
        if (this.refImage.complete && this.refImage.naturalWidth > 0) return resolve();
        this.refImage.addEventListener("load", () => resolve(), { once: true });
      });

    await waitForImageLoad();

    // Initial sizing
    updateSize();

    // Update on window resize or zoom
    window.addEventListener("resize", updateSize);
    // Listen to zoom changes (optional, for better accuracy)
    window.addEventListener("scroll", updateSize, { passive: true });
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
      this.fov,
      this.canvas.width / Math.max(1, this.canvas.height),
      0.01,
      100
    );
    this.camera.position.set(this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z);
    this.camera.lookAt(0, 0, 0);
  }

  _setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  }

  async _loadModelTemplate() {
    if (this.modelTemplate) return this.modelTemplate; // Already loaded

    return new Promise((resolve, reject) => {
      this.gltfLoader.load(
        this.modelUri,
        (gltf) => {
          this.modelTemplate = gltf.scene;
          this._processModel(this.modelTemplate);
          resolve(this.modelTemplate);
        },
        undefined,
        (error) => reject(error)
      );
    });
  }

  _processModel(model) {
    model.traverse((child) => {
      if (child.isMesh && child.material) {
        if (child.material.name === "Body") {
          child.material.metalness = 1.1;
          child.material.roughness = 0.25;
          this.bodyMeshes.push(child);
        }
        if (child.material.name === "Silver") {
          child.material.metalness = 1.3;
          child.material.roughness = 0.1;
        }
      }
    });
  }

  // 🔹 Public: Create a can
  async createCan({
    position = new THREE.Vector3(0, 0, 0),
    scale = 0.2,
    rotation = 0,
    texturePath = null,
  }) {
    const template = await this._loadModelTemplate();
    const can = template.clone();

    can.position.copy(position);
    can.scale.set(scale, scale, scale);
    can.rotation.z = rotation;
    can.rotateOnAxis(new THREE.Vector3(0, 1, 0), -Math.PI / 2);

    if (texturePath) {
      can.traverse((child) => {
        if (child.isMesh && child.material.name === "Body") {
          child.material = child.material.clone();
          const tex = this.textureLoader.load(texturePath);
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
          tex.center.set(0.5, 0.5);
          tex.flipY = false;
          child.material.map = tex;
          child.material.needsUpdate = true;
        }
      });
    }

    this.scene.add(can);
    return can;
  }

  animate() {
    requestAnimationFrame(this.animate);
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}

export default ModelMaker;
