import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function getElemRect({ el, hasParent = false, hasgrandParent = false, markers = false, markersText = false }) {
  if (typeof el === "string") el = document.querySelector(el);
  if (!el) return null;

  const { scrollX, scrollY } = window;

  const childRect = el.getBoundingClientRect();
  const parentEl = el.parentElement;
  const grandParentEl = parentEl?.parentElement;

  const parentRect = parentEl?.getBoundingClientRect();
  const grandRect = grandParentEl?.getBoundingClientRect();

  let targetRect = childRect,
    debugTarget = el,
    color = "red",
    label = "self";

  if (hasgrandParent && grandRect) {
    targetRect = grandRect; debugTarget = grandParentEl; color = "orange"; label = "grandparent";
  } else if (hasParent && parentRect) {
    targetRect = parentRect; debugTarget = parentEl; color = "blue"; label = "parent";
  }

  const xCenter = childRect.left + childRect.width / 2 + scrollX;

  const points = {
    center:       { x: xCenter, y: targetRect.top + targetRect.height / 2 + scrollY },
    topCenter:    { x: xCenter, y: targetRect.top + scrollY },
    bottomCenter: { x: xCenter, y: targetRect.top + targetRect.height + scrollY }
  };

  // ✅ Debug markers + labels
  if (markers || markersText) {
    debugTarget.style.outline = `1px dashed ${color}`;

    Object.entries(points).forEach(([key, { x, y }]) => {
      if (markers) {
        const dot = document.createElement("div");
        dot.style.cssText = `
          position: absolute; top:${y - 5}px; left:${x - 5}px;
          width:10px; height:10px; background:${color}; border-radius:50%;
          z-index:999; pointer-events:none;
        `;
        document.body.appendChild(dot);
      }
      if (markersText) {
        const labelText = document.createElement("div");
        labelText.textContent = `${label} - ${key}`;
        labelText.style.cssText = `
          position:absolute; top:${y + 8}px; left:${x + 8}px;
          color:${color}; font-size:12px; background:#fff; padding:2px 4px;
          border:1px solid ${color}; border-radius:4px; z-index:999;
          pointer-events:none; white-space:nowrap;
        `;
        document.body.appendChild(labelText);
      }
    });
  }
  return points;
}

function getSvgPath(points, { id = "motion-path-svg", color = "red", curviness = 0.5, showMarkers = false, } = {}) {
  const svgNS = "http://www.w3.org/2000/svg";
  const rawPath = MotionPathPlugin.arrayToRawPath(points, { curviness });
  // ✅ convert rawPath into SVG-compatible "d" string
  const pathStr = MotionPathPlugin.rawPathToString(rawPath);
  // create SVG container
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("id", id);
  svg.style.cssText = `position: absolute;top: 0;left: 0;width: 100%;height: 100%;pointer-events: none;z-index: 10;`;

  // create <path>
  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", pathStr);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", color);
  path.setAttribute("stroke-width", 2); // static width
  path.setAttribute("vector-effect", "non-scaling-stroke");

  svg.appendChild(path); // add path in SVG

  // ✅ If markers are enabled, draw small circles at each anchor point
  if (showMarkers) {
    points.forEach((pt, i) => {
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", pt.x);
      circle.setAttribute("cy", pt.y);
      circle.setAttribute("r", 4); // Static radius
      circle.setAttribute("fill", "blue");
      circle.setAttribute("stroke", "#fff");
      circle.setAttribute("stroke-width", 1);

      // optional: add index label
      const text = document.createElementNS(svgNS, "text");
      text.setAttribute("x", pt.x + 8);
      text.setAttribute("y", pt.y + 4);
      text.setAttribute("font-size", "12");
      text.setAttribute("fill", "green");
      text.textContent = i;
      svg.appendChild(text);

      svg.appendChild(circle);
    });
  }
  document.body.appendChild(svg);
  return svg;
}

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

window.addEventListener("load", () => {
  const startpoint = getElemRect({ el: ".img-sec", markers: true, markersText: true });
  const firstSection = getElemRect({ el: ".ref-1", hasgrandParent: true, markers: true, markersText: true });
  const secondSection = getElemRect({ el: ".ref-2", hasgrandParent: true, markers: true, markersText: true });
  const thirdSection = getElemRect({ el: ".ref-3", hasgrandParent: true, markers: true, markersText: true });
  const endpoint = getElemRect({ el: ".ref-4", markers: true, markersText: true });

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

  getSvgPath(motionPath, { curviness: 1, showMarkers: true, });

  // collect all sections
  let sections = gsap.utils.toArray(".has-path");
  const path = document.querySelector("#motion-path-svg path");
  const canvas = document.querySelector(".model-maker-canvas");
  // timeline across all sections
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: sections[0],     // start at first section
      endTrigger: sections[sections.length - 1], // end at last section
      start: "20%",
      end: `+=${path.getBoundingClientRect().height }`, // <-- use path length for scroll distance
      scrub: true,
    }
  });

  // motionPath controlled by scroll
  tl.to(canvas, {
    motionPath: {
      path: path,
      align: path,
      alignOrigin: [0.5, 0.5],
      // autofocus: true,
      autoRotate: -90 
    },
    ease: "none" // important for scroll sync
  }, 0);
  const bodyClasses = ["bg-first", "bg-theme", "bg-second", "bg-alter", "bg-last"]; // or bg colors
  const bgColors   = ["#FFFFFF", "#D0011C", "#914C9D", "#F57F20", "#FFFFFF"]; // optional

  sections.forEach((sec, i) => {
    ScrollTrigger.create({
      trigger: sec,
      start: "top center",
      end: i === sections.length - 1 ? "bottom bottom" : "bottom center", // ✅ different end for last section
      onEnter: () => {
        // if you want classes
        sec.classList.add(bodyClasses[i]);


        // OR if you want smooth bg color fade
        gsap.to(document.body, { backgroundColor: bgColors[i], duration: 1 });
      },
      onEnterBack: () => {
        sec.classList.add(bodyClasses[i]);
        gsap.to(document.body, { backgroundColor: bgColors[i], duration: 1 });
      }
    });
  });
  
});

import Lenis from 'lenis'
// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 600); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);