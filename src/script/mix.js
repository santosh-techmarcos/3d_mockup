import * as THREE from "three";
import { GLTFLoader, RGBELoader } from "three/examples/jsm/Addons.js";
import { gsap } from "./script.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100);
camera.position.set(0, 0, 6);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("webgl"),
  antialias: true,
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;

// Environment
new RGBELoader().load("./assets/models/environment.hdr", (hdr) => {
  hdr.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = hdr;
  scene.environmentIntensity = 0.8;
});

// Reusable function to create cans
function createCan(model, position, scale, rotationZ, texturePath, tiltDelay = 0) {
  const can = model.clone();
  can.position.copy(position);
  can.scale.set(scale, scale, scale);
  can.rotation.z = rotationZ;
  scene.add(can);

  // Apply texture to "Body"
  can.traverse((child) => {
    if (child.isMesh && child.material.name === "Body") {
      child.material = child.material.clone(); // 👈 clone material so textures stay independent
      child.material.metalness = 1
      child.material.roughness = 0.2
      const tex = new THREE.TextureLoader().load(texturePath);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.center.set(0.5, 0.5);
      tex.flipY = false;
      child.material.map = tex;
      child.material.needsUpdate = true;
      tex.offset.x = 3.28; 
      
      // Rotate texture (scroll around can)
      // gsap.to(tex.offset, {
      //   x: 1,
      //   duration: 6,
      //   repeat: -1,
      //   ease: "linear",
      // });
    }
  });

  // Slight tilt animation
  gsap.to(can.rotation, {
    z: rotationZ + 0.2,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    delay: tiltDelay,
  });

  return can;
}

// Load model
new GLTFLoader().load("./assets/models/model.gltf", (gltf) => {
  const base = gltf.scene;
  base.scale.set(0.2, 0.2, 0.2);

  // Left Can
  createCan(
    base,
    new THREE.Vector3(-1.22, 0.3, 0),
    0.2,
    -Math.PI / 6,
    "./assets/models/LOL-Label-orange.jpg",
    1.5
  );

  // Right Can
  createCan(
    base,
    new THREE.Vector3(1.1, 0.8, 0),
    0.25,
    Math.PI / 3.6,
    "./assets/models/LOL-Label-grape.webp",
  );

  animate();
});

// Render loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
