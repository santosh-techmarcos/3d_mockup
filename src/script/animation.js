import ModelMaker from "./3dmodel.js";
import { THREE, gsap, ScrollTrigger, getElemRect, getSvgPath } from "./script.js";

// ---------- GLOBAL VARS ----------
let leftSpinTween, rightSpinTween, centerSpinTween;
let centerCan
// ---------- HELPERS ----------
// ---------- HELPERS ----------
function spinCan(can, c = 0, speed = 0.01) {
  const axis = new THREE.Vector3(0, 1, c);
  return gsap.to({}, {
    duration: 20,
    repeat: -1,
    ease: "none",
    onUpdate: () => can.rotateOnAxis(axis, speed)
  });
}

function updatecenterCanTexture(texPath) {
  if (!centerCan) return;
  new THREE.TextureLoader().load(texPath, (tex) => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.center.set(0.5, 0.5);
    tex.flipY = false;
    centerCan.traverse(child => {
      if (child.isMesh && child.material.name === "Body") {
        child.material.map = tex;
        child.material.needsUpdate = true;
      }
    });
  });
}

function resumeSpins() {
  leftSpinTween.resume();
  rightSpinTween.resume();
}

// ---------- INIT WORLD ----------
window.addEventListener("load", async () => {
  const world = new ModelMaker({
    isFullWindow: true,
    fov: 46,
    cameraPosition: { x: 0, y: 0, z: 6 },
    environmentUri: "./assets/models/world.hdr"
  });

  const centerCanMaker = new ModelMaker({
    refImage: ".main-img",
    fov: 9,
    cameraPosition: { x: 0, y: 1, z: 10 },
    environmentUri: "./assets/models/environment.hdr"
  });

  await world.init();
  await centerCanMaker.init();

  // Create cans
  const rightCan = await world.createCan({
    position: new THREE.Vector3(1.4, 0.5, 0),
    scale: 0.26,
    rotation: Math.PI / 3.8,
    texturePath: "./assets/models/LOL-Label-grape.webp"
  });

  const leftCan = await world.createCan({
    position: new THREE.Vector3(-1.3, 0, 0),
    scale: 0.22,
    rotation: -Math.PI / 6.1,
    texturePath: "./assets/models/LOL-Label-orange.jpg"
  });

  centerCan = await centerCanMaker.createCan({
    position: new THREE.Vector3(0, 0, 0),
    texturePath: "./assets/models/LOL-Label-cherry.webp"
  });


  // Spin animations
  leftSpinTween = spinCan(leftCan, 0.1, 0.008);
  rightSpinTween = spinCan(rightCan, 0.1, 0.008);
  centerSpinTween = spinCan(centerCan, 0, 0.008);

  // Motion path setup
  const sectionsElems = [".img-sec", ".ref-1", ".ref-2", ".ref-3", ".ref-4"];
  const rects = sectionsElems.map((sel, i) => 
    getElemRect({ el: sel, hasgrandParent: i > 0 && i < 4 })
  );

  const motionPath = [
    { x: rects[0].center.x, y: rects[0].center.y },
    { x: rects[0].center.x, y: rects[0].center.y + 100 },
    { x: rects[0].bottomCenter.x + 10, y: rects[0].bottomCenter.y },
    { x: rects[1].topCenter.x - 15, y: rects[1].topCenter.y },
    { x: rects[1].topCenter.x, y: rects[1].topCenter.y + 200 },
    { x: rects[1].center.x, y: rects[1].center.y },
    { x: rects[1].bottomCenter.x, y: rects[1].bottomCenter.y - 200 },
    { x: rects[1].bottomCenter.x - 40, y: rects[1].bottomCenter.y },
    { x: rects[2].topCenter.x + 40, y: rects[2].topCenter.y },
    { x: rects[2].topCenter.x, y: rects[2].topCenter.y + 200 },
    { x: rects[2].center.x, y: rects[2].center.y },
    { x: rects[2].bottomCenter.x, y: rects[2].bottomCenter.y - 200 },
    { x: rects[2].bottomCenter.x + 30, y: rects[2].bottomCenter.y },
    { x: rects[3].topCenter.x - 30, y: rects[3].topCenter.y },
    { x: rects[3].topCenter.x, y: rects[3].topCenter.y + 200 },
    { x: rects[3].center.x, y: rects[3].center.y },
    { x: rects[3].bottomCenter.x, y: rects[3].bottomCenter.y - 200 },
    { x: rects[3].bottomCenter.x - 40, y: rects[3].bottomCenter.y },
    { x: rects[4].topCenter.x + 40, y: rects[4].topCenter.y - 200 },
    { x: rects[4].topCenter.x, y: rects[4].topCenter.y },
    { x: rects[4].topCenter.x, y: rects[4].topCenter.y + 100 },
    { x: rects[4].center.x, y: rects[4].center.y }
  ];

  const svg = getSvgPath(motionPath, { curviness: 0.8 });
  document.body.appendChild(svg);
  const path = document.querySelector("#motion-path-svg path");

  const textures = [
    "./assets/models/LOL-Label-cherry.webp",
    "./assets/models/LOL-Label-cherry.webp",
    "./assets/models/LOL-Label-grape.webp",
    "./assets/models/LOL-Label-orange.jpg",
    "./assets/models/LOL-Label-orange.jpg"
  ];
  const bgColors = ["#FFFFFF", "#D0011C", "#914C9D", "#F57F20", "#FFFFFF"];
  const sections = gsap.utils.toArray(".has-path");
  const canvas = document.querySelector(".model-maker-canvas");


  // can animation
  gsap.timeline({
    scrollTrigger: {
      trigger: sections[0],
      endTrigger: sections[sections.length - 1],
      start: "20%",
      end: "bottom bottom",
      scrub: true,
      onUpdate: self => {
        centerSpinTween.pause();
        leftSpinTween.pause();
        rightSpinTween.pause();
        centerCan.rotation.y = 4.46 + self.progress * Math.PI * 20;
      },
      onLeave: ()=>{
        centerSpinTween.pause();
        leftSpinTween.pause();
        rightSpinTween.pause();
      },
      onLeaveBack: ()=>{
        centerSpinTween.resume();
        leftSpinTween.resume();
        rightSpinTween.resume();
      }
    }
  }).to(canvas, {
    motionPath: {
      path,
      align: path,
      alignOrigin: [0.5, 0.5],
      autoRotate: -90
    },
    ease: "none"
  });

  // Section-based texture & bg updates
  sections.forEach((sec, i) => {
    ScrollTrigger.create({
      trigger: sec,
      start: "top center",
      end: i === sections.length - 1 ? "bottom bottom" : "bottom center",
      onEnter: () => {
        gsap.to(document.body, { backgroundColor: bgColors[i], duration: 0.5 });
        updatecenterCanTexture(textures[i]);
      },
      onEnterBack: () => {
        gsap.to(document.body, { backgroundColor: bgColors[i], duration: 0.5 });
        updatecenterCanTexture(textures[i]);
      }
    });
  });


  // Text animations
  const tl = gsap.timeline();
  const textElems = document.querySelectorAll(".text-anim h1");

  textElems.forEach((elem) => {
    const chars = elem.textContent.split("");
    elem.innerHTML = "";

    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.opacity = 0;
      span.style.transform = "translateY(100%)";
      elem.appendChild(span);
    });

    tl.to(elem.querySelectorAll("span"), {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.05,
    }, "2");
  });

  tl.to(".text-track", {
    xPercent: -50,
    ease: "none",
    duration: 20,
    repeat: -1,
  }, "+=0.5");

  let fruitElem = gsap.utils.toArray('.fruit-elem');

  fruitElem.forEach((elem, i) => {
    // Detect blur (background) vs sharp (foreground)
    const img = elem.querySelector("img");
    const isBlur = window.getComputedStyle(img).filter.includes("blur");

    // Depth-based motion intensity
    const motionFactor = isBlur ? 0.8 : 1; // 0.5 = subtle, 1 = full motion

    const delay = gsap.utils.random(0, 2, 0.3);

    // 🍏 Scale (breathing)
    gsap.to(elem, {
      scale: gsap.utils.random(0.85, 1.15) * motionFactor,
      duration: gsap.utils.random(1.2, 2.5),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay
    });

    // 🍊 Rotate (gentle sway)
    gsap.to(elem, {
      transformOrigin: "center center",
      rotation: gsap.utils.random(-15, 15) * motionFactor,
      duration: gsap.utils.random(2.5, 5),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay
    });

    // 🍇 Float (x or y randomly)
    if (Math.random() > 0.5) {
      gsap.to(elem, {
        x: gsap.utils.random(-20, 20) * motionFactor,
        duration: gsap.utils.random(2, 4) * motionFactor,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay
      });
    } else {
      gsap.to(elem, {
        y: gsap.utils.random(-15, 15) * motionFactor,
        duration: gsap.utils.random(2.5, 5) * motionFactor,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay
      });
    }
  });

  // 🌿 Leaves sway effect (hawa feel)
  gsap.to('.leaf', {
    keyframes: [
      { rotation: -4, duration: 1.5 },
      { rotation: 5, duration: 2 },
    ],
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".h-text-track", {
    xPercent: -50,
    ease: "slow(0.7,0.7,false)",
    scrollTrigger: {
      trigger: ".map-sec",
      start: "top bottom",
      end: "bottom top",
      scrub: 2,         
    }
  });
});

