import * as THREE from 'three';
import { DRACOLoader, GLTFLoader, RGBELoader } from "three/examples/jsm/Addons.js";
import domReady from '@roots/sage/client/dom-ready';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

domReady(async () => {
  // Initialize the Canvas Setup for 3d rendering
  class CanvasManager {
    constructor(canvasSelector, referenceWrapper, page, isHome, isMobile) {
      gsap.registerPlugin(ScrollTrigger);
      this.canvasSelector = canvasSelector;
      this.referenceWrapper = document.querySelector(referenceWrapper);
      this.isHome = isHome;
      this.isMobile = isMobile || window.innerWidth <= 991;
      this.canvases = document.querySelectorAll(canvasSelector);
      this.pages = document.querySelectorAll(page);
  
      this.initSet = {
        rotationY: 4.8,
        rotationX: 0.065,
        rotationZ: 0,
        cameraX: 0,
        cameraY: 1.6,
        cameraZ: 46,
        metalness: 1,
        roughness: 0.28,
      };
  
      if (this.canvases.length === 0) {
        console.error("No canvas found");
        return;
      }
      if (this.referenceWrapper.length === 0) {
        console.error("No wrapper not found");
        return;
      }
      // if (this.isMobile && this.isHome) {
      //   this.canvases = Array.from(this.canvases).slice(1);
      // }
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

      if(this.isHome){
        const homepageSetting = {
          rotationPerSection: Math.PI * 2,
          noAnimationForFirstSectionOnMobile: true,
          frontViewValue: this.isMobile ? 2 : 1.7,
        };
        this.setupScrollAnimation(homepageSetting);
      }else{
        const singlePageSettings = {
          rotationPerSection: Math.PI * 2 * 2,
          noAnimationForFirstSectionOnMobile: false,
          frontViewValue: 4.5,
        };
        this.setupScrollAnimation(singlePageSettings);
      }
      this.setupCanvasSizeAsync();
      this.initCanvas();
      this.animate();
    }

    // Setup canvas size dynamically with promise handling
    async setupCanvasSizeAsync() {
      const waitForInnerPreload = () => {
        return new Promise((resolve) => {
          const referenceWrapper = this.referenceWrapper;
          const preloadImage = referenceWrapper.querySelector("img");
          
          if (!preloadImage) return resolve();
          
          if (preloadImage.complete && preloadImage.naturalWidth > 0) {
            // console.log("Preload image already loaded");
            return resolve();
          }
    
          const onLoad = () => {
            preloadImage.removeEventListener('load', onLoad);
            // console.log(
            //   "Preload image loaded",
            //   preloadImage.naturalWidth,
            // )
            resolve();
          };
    
          preloadImage.addEventListener('load', onLoad);
        });
      };
    
      // Wait for `.inner-preload` image to load
      await waitForInnerPreload();
    
      // Update canvas size
      const updateCanvasSize = () => {
        const referenceRect = this.referenceWrapper.getBoundingClientRect();
        let width = referenceRect.width;
        let height = referenceRect.height;
    
        if (window.innerWidth <= 576 && this.isHome) {
          width *= 1.3;
          height *= 1.3;
        }
    
        // Cache length and parameters
        const canvases = this.canvases;
        const cameras = this.cameras;
        const renderers = this.renderers;
        const canvasCount = canvases.length;
    
        for (let i = 0; i < canvasCount; i++) {
          const canvas = canvases[i];
          const innerWrapper = canvas.parentNode;
          
          // Set dimensions once per canvas
          canvas.width = width;
          canvas.height = height;
          canvas.style.width = innerWrapper.style.width = `${width}px`;
          canvas.style.height = innerWrapper.style.height = `${height}px`;
    
          // Update Three.js components
          const camera = cameras[i];
          const renderer = renderers[i];
          
          if (camera && renderer) {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height, false);
          }
        }
      };
    
      // Initial setup
      updateCanvasSize();
    
      // Manage existing resize observer
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    
      // Create new observer with debouncing
      this.resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(updateCanvasSize);
      });
      
      this.resizeObserver.observe(this.referenceWrapper);
    }
    
    // Initialize canvas with scenes, cameras, and loaders
    async initCanvas() {
      await this.setupCanvasSizeAsync();

      this.canvases.forEach((canvas, i) => {
        const scene = new THREE.Scene();
        this.scenes.push(scene);

        const hdrPromise = new Promise((resolve, reject) => {
          this.rgbeLoader.load(
            `${mediathemeUri}images/models/environment.hdr`,
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
        camera.position.set(this.initSet.cameraX, this.initSet.cameraY, this.initSet.cameraZ);
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
      const modelPath = `${mediathemeUri}images/models/model.gltf`;
      const texturePath = canvas.dataset.texture;

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

            model.rotation.set(this.initSet.rotationX, this.initSet.rotationY, this.initSet.rotationZ);

            model.traverse((child) => {
              if (child.isMesh) {
                if (child.material.name === "Body") {
                  child.material.map = texture;
                  child.material.needsUpdate = true;
                  child.material.metalness = this.initSet.metalness;
                  child.material.roughness = this.initSet.roughness;
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
        setTimeout(() => { this.referenceWrapper.style.opacity = 0;}, 100);
        this.canvases.forEach((canvas) => {
          canvas.style.opacity = 1;
          canvas.parentNode.querySelector(".can-shadow ").style.opacity = 0.9;
        });
      } catch (error) {
        console.error("Error loading assets:", error);
      }
    }

  
    // Update cameras with current settings
    updateCameras() {
      this.cameras.forEach((camera, index) => {
        camera.position.set(this.initSet.cameraX, this.initSet.cameraY, this.initSet.cameraZ);
        camera.lookAt(this.scenes[index].children[0]?.position || new THREE.Vector3(0, 0, 0));
        camera.updateProjectionMatrix();
      });
    }
  
    // Update models with current rotation
    updateModels() {
      this.models.forEach(({ model }) => {
        if (model) {
          model.rotation.set(this.initSet.rotationX, this.initSet.rotationY, this.initSet.rotationZ);
        }
      });
    }
  
    // Setup scroll-based animations
    setupScrollAnimation(settings = {}) {
      // Default settings (fallback)
      const defaultSettings = {
        rotationPerSection: Math.PI * 2,
        startPoint: "top top",
        endPoint: "bottom top",
        noAnimationForFirstSectionOnMobile: false,
        frontViewValue: 2,
      };
    
      // Merge passed settings with defaults
      const {
        rotationPerSection,
        noAnimationForFirstSectionOnMobile,
        frontViewValue,
      } = { ...defaultSettings, ...settings };
    
      // Update front view value dynamically based on window size
      this.initSet.rotationY = frontViewValue;
    
      // Clear existing ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    
      const firstSectionHeight = this.pages[0]?.getBoundingClientRect()?.height || 0;
      let start = "top top";
      let end = "bottom top";
    
      // Setup ScrollTrigger for each section
      this.pages.forEach((section, index) => {
        if (this.isHome && !this.isMobile) {
          start = "top center";
          end = "bottom center";
        }
        if (this.isHome && this.isMobile) {
          start = "top 90%";
          end = "bottom center";
        }
    
        if (index === 0 && this.isHome && !this.isMobile) {
          start = `top ${firstSectionHeight * 0.45}px`;
          end = `bottom ${firstSectionHeight * 0.45}px`;
        }
        if (this.isMobile && index === 0 && noAnimationForFirstSectionOnMobile) {
          return;
        }
        // ScrollTrigger for each section
        ScrollTrigger.create({
          trigger: section,
          start,
          end,
          scrub: 2,
          onUpdate: (trigger) => {
            const progress = trigger.progress;
            if (this.isMobile) {
              // Rotate only the active section
              if (trigger.isActive) {
                const model = this.models[index]?.model;
                if (model) {
                  model.rotation.y = frontViewValue + rotationPerSection * index + progress * rotationPerSection;
                }
              }
            } else {
              // Rotate all sections together on desktop
              this.initSet.rotationY = frontViewValue + rotationPerSection * index + progress * rotationPerSection;
              this.updateModels();
            }
          },
        });
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
  
  // Setup for canvas position update
  const canvasPosition = (elem, ref, page) => {
    // console.log("Calculating canvas position....start");
    const referenceWrapper = document.querySelector(ref);
    if (!referenceWrapper){
      // console.log("Reference wrapper not found");
      return;
    }

    const refRect = referenceWrapper.getBoundingClientRect();
    const pages = document.querySelectorAll(page);
    const isMobile = window.innerWidth <= 991;
  
    pages.forEach((e, i) => {
      const pageRect = e.getBoundingClientRect();
      const canvas = e.querySelector(elem);
      if(page === '.home-anim-box'){
        if (!isMobile) {
          canvas.style.position = "fixed";
          canvas.style.left = `${refRect.left}px`;
          canvas.style.top = `${refRect.top + window.scrollY}px`;
    
          if (i === pages.length - 1) {
            const lastPageCenterY = pageRect.top + pageRect.height / 2;
            const canvasCenterY = window.innerHeight / 2;
            const parentNode = canvas.parentNode.getBoundingClientRect();
    
            if (lastPageCenterY <= canvasCenterY) {
              canvas.style.position = "absolute";
              canvas.style.left = `${refRect.left - parentNode.left}px`;
              canvas.style.top = "unset";
            }
          }
        } else {
          if(i === 0){
            canvas.style.position = "absolute";
            canvas.style.left = "";
            canvas.style.top = "";
          }else{
            canvas.style.position = "relative";
            canvas.style.left = "";
            canvas.style.top = "";
          }
        }
      }else{
        if(!isMobile){
          canvas.parentNode.style.position = "sticky";
        }
      }
    });
    // console.log(" Calculating canvas position....end");
  };

  let isHome = jQuery("body").hasClass("home")
  let isDrinkLolli = jQuery("body").hasClass("page-template-drinklolli")
  canvasPosition(".inner-canvas", ".inner-preload", ".home-anim-box");

  if (isHome || isDrinkLolli) {
    const homeCanvas =  new CanvasManager(".canvas", ".inner-preload", ".home-anim-box", isHome || isDrinkLolli);
    window.addEventListener("DOMContentLoaded", () => {
      canvasPosition(".inner-canvas", ".inner-preload", ".home-anim-box");
      // ScrollTrigger.refresh();
    });
    /***************************shadow effect******************************* */
    gsap.registerPlugin(ScrollTrigger);

    const backgroundShadow = document.querySelector(".background-shadow");
    const backgroundImg = document.querySelector(".background-img");

    const setFixedShadowSize = () => {
      if (!backgroundImg || !backgroundShadow) return;
  
      const { width, height, top, left } = backgroundImg.getBoundingClientRect();
  
      // Apply styles only when viewport width is greater than 991px
      if (window.innerWidth > 991) {
          Object.assign(backgroundShadow.style, {
              position: 'fixed',
              width: `${width}px`,
              height: `${height}px`,
              top: `${top + window.scrollY}px`,
              left: `${left}px`,
          });
      } else {
          // Reset styles when on mobile
          Object.assign(backgroundShadow.style, {
              position: '',
              width: '',
              height: '',
              top: '',
              left: '',
          });
      }
    };
    const applyGsapEffect = () => {
      if (window.innerWidth > 991) {
        // const endPosition = window.innerWidth <= 576 ? '60% center' : window.innerWidth <= 767 ? '50% center' : window.innerWidth <= 991 ? '40% center' :'bottom 90%';
        const endPosition = 'bottom 90%';
          gsap.to(backgroundShadow, {
              duration: 0.5,
              opacity: 0,
              ease: 'power2.inOut',
              scrollTrigger: {
                  trigger: '.banner-sec',
                  start: 'top top',
                  end: endPosition,
                  scrub: true,
              }
          });
      }
    };
    setFixedShadowSize();
    applyGsapEffect();
    /***************************shadow effect******************************* */  
    window.addEventListener("resize", () => {
      canvasPosition(".inner-canvas", ".inner-preload", ".home-anim-box");
      homeCanvas.setupCanvasSizeAsync();
      setFixedShadowSize();
      applyGsapEffect();
    });
  
    window.addEventListener("scroll", () => {
      canvasPosition(".inner-canvas", ".inner-preload", ".home-anim-box");
      setFixedShadowSize();
    });
  }
  
  if (jQuery('body').hasClass('single-product')) {
    const productCanvas =  new CanvasManager('.canvas', '.inner-preload', '.product-anim');
    window.addEventListener("DOMContentLoaded", () => {
      canvasPosition(".inner-canvas", ".inner-preload", ".product-anim");
    });
  
    window.addEventListener("resize", () => {
      canvasPosition(".inner-canvas", ".inner-preload", ".product-anim");
      productCanvas.setupCanvasSizeAsync();
    });
  
    window.addEventListener("scroll", () => {
      canvasPosition(".inner-canvas", ".inner-preload", ".product-anim");
    });
  }
});