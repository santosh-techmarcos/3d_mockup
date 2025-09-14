import { gsap, ScrollTrigger, getElemRect, getSvgPath } from "./script.js";
import  ModelMaker  from "./3dmodel.js";

const model = new ModelMaker({
  canvas: ".model-maker-canvas",
  refImage: ".main-img",
  modelUri: "./assets/models/model.gltf",
});


window.addEventListener("load", async () => {
  await model.init();

  // ✅ Default cherry.webp texture
  model.changeTextureCrossfade("./assets/models/LOL-Label-cherry.webp");

  const startpoint = getElemRect({ el: ".img-sec", markers:false });
  const firstSection = getElemRect({ el: ".ref-1", hasgrandParent: true, markers:false });
  const secondSection = getElemRect({ el: ".ref-2", hasgrandParent: true, markers:false });
  const thirdSection = getElemRect({ el: ".ref-3", hasgrandParent: true, markers:false });
  const endpoint = getElemRect({ el: ".ref-4", markers:false });

  const motionPath = [
    { x: startpoint.center.x, y: startpoint.center.y }, //0
    { x: startpoint.center.x, y: startpoint.center.y + 100 }, // 1
    { x: startpoint.bottomCenter.x + 10, y: startpoint.bottomCenter.y}, // 2

    { x: firstSection.topCenter.x - 15, y: firstSection.topCenter.y }, // 3
    { x: firstSection.topCenter.x, y: firstSection.topCenter.y + 200 }, // 4
    { x: firstSection.center.x, y: firstSection.center.y }, // 5
    { x: firstSection.bottomCenter.x, y: firstSection.bottomCenter.y - 200 }, // 6
    { x: firstSection.bottomCenter.x - 40, y: firstSection.bottomCenter.y }, // 7

    { x: secondSection.topCenter.x + 40, y: secondSection.topCenter.y }, // 8
    { x: secondSection.topCenter.x, y: secondSection.topCenter.y + 200 }, // 9
    { x: secondSection.center.x, y: secondSection.center.y }, // 10
    { x: secondSection.bottomCenter.x, y: secondSection.bottomCenter.y - 200 }, // 11
    { x: secondSection.bottomCenter.x + 30, y: secondSection.bottomCenter.y }, // 12

    { x: thirdSection.topCenter.x - 30, y: thirdSection.topCenter.y }, // 13
    { x: thirdSection.topCenter.x, y: thirdSection.topCenter.y + 200 }, // 14
    { x: thirdSection.center.x, y: thirdSection.center.y }, // 15
    { x: thirdSection.bottomCenter.x, y: thirdSection.bottomCenter.y - 200 }, // 16
    { x: thirdSection.bottomCenter.x - 40, y: thirdSection.bottomCenter.y }, // 17

    { x: endpoint.topCenter.x + 40, y: endpoint.topCenter.y - 200 }, // 18
    { x: endpoint.topCenter.x, y: endpoint.topCenter.y }, // 19
    { x: endpoint.center.x, y: endpoint.center.y } // 20
  ];

  const textures = [
    "./assets/models/LOL-Label-cherry.webp",
    "./assets/models/LOL-Label-cherry.webp",
    "./assets/models/LOL-Label-grape.webp",
    "./assets/models/LOL-Label-orange.jpg",
    "./assets/models/LOL-Label-orange.jpg",
  ];

  const bgColors = [
    "#FFFFFF",
    "#D0011C",
    "#914C9D",
    "#F57F20",
    "#FFFFFF"
  ];

  // SVG motion path preview
  let svg = getSvgPath(motionPath, { curviness: 1, color: 'red', showMarkers:false });
  document.body.appendChild(svg);

  let sections = gsap.utils.toArray(".has-path");
  const path = document.querySelector("#motion-path-svg path");
  const canvas = document.querySelector(".model-maker-canvas");

  // MotionPath synced with scroll
  gsap.timeline({
    scrollTrigger: {
      trigger: sections[0],
      endTrigger: sections[sections.length - 1],
      start: "20%",
      end: "bottom bottom",
      scrub: true,
      onUpdate: self => {
        model.updateRotation({
          x: 0.1,
          y: 4.47 + self.progress * Math.PI * 20,
          z: 0
        });
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
        model.changeTextureCrossfade(textures[i]);
        gsap.to(document.body, { backgroundColor: bgColors[i], duration: 1 });
      },
      onEnterBack: () => {
        model.changeTextureCrossfade(textures[i]);
        gsap.to(document.body, { backgroundColor: bgColors[i], duration: 1 });
      }
    });
  });
});

