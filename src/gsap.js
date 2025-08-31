import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ModelMaker from "./3dmodel";

export function getElemRect({ el, hasParent = false, hasgrandParent = false, markers = false, markersText = false }) {
  // Allow selector string
  if (typeof el === "string") {
    el = document.querySelector(el);
  }
  if (!el) return null;

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  const childRect = el.getBoundingClientRect();
  const parentEl = el.parentElement;
  const grandParentEl = parentEl?.parentElement;

  const parentRect = parentEl?.getBoundingClientRect();
  const grandRect = grandParentEl?.getBoundingClientRect();

  // Determine reference target
  let targetRect = childRect;
  let debugTarget = el;
  let color = "red";
  let label = "self";

  if (hasgrandParent && grandRect) {
    targetRect = grandRect;
    debugTarget = grandParentEl;
    color = "orange";
    label = "grandparent";
  } else if (hasParent && parentRect) {
    targetRect = parentRect;
    debugTarget = parentEl;
    color = "blue";
    label = "parent";
  }

  // X based on child center, always
  const xCenter = childRect.left + childRect.width / 2 + scrollX;

  const points = {
    center: {
      x: xCenter,
      y: targetRect.top + targetRect.height / 2 + scrollY
    },
    topCenter: {
      x: xCenter,
      y: targetRect.top + scrollY
    },
    bottomCenter: {
      x: xCenter,
      y: targetRect.top + targetRect.height + scrollY
    }
  };

  // Optional markers
  if (markers) {
      // Outline target element
    if (debugTarget) {
      debugTarget.style.outline = `1px dashed ${color}`;
      // debugTarget.style.outlineOffset = "-2px"; // avoid margin issues
    }
    Object.entries(points).forEach(([key, p]) => {
      const dot = document.createElement("div");
      dot.style.cssText = `
        position: absolute;
        top: ${p.y - 5}px;
        left: ${p.x - 5}px;
        width: 10px;
        height: 10px;
        background: ${color};
        border-radius: 50%;
        z-index: 999;
        pointer-events: none;
      `;
      document.body.appendChild(dot);
    });
  }

    // Optional markers
  if (markersText) {
    // Outline target element
    if (debugTarget) {
      debugTarget.style.outline = `1px dashed ${color}`;
      // debugTarget.style.outlineOffset = "-2px"; // avoid margin issues
    }
    Object.entries(points).forEach(([key, p]) => {
      const labelText = document.createElement("div");
      labelText.textContent = `${label} - ${key}`;
      labelText.style.cssText = `
        position: absolute;
        top: ${p.y + 8}px;
        left: ${p.x + 8}px;
        color: ${color};
        font-size: 12px;
        background: #fff;
        padding: 2px 4px;
        border: 1px solid ${color};
        border-radius: 4px;
        z-index: 999;
        pointer-events: none;
        white-space: nowrap;
      `;
      document.body.appendChild(labelText);

    });
  }

  return points;
}


function getSvgPathFromPoints(points) {
  if (!points || points.length === 0) return "";

  const [first, ...rest] = points;
  let d = `M ${first.x} ${first.y}`; // Move to first point

  rest.forEach(p => {
    d += ` L ${p.x} ${p.y}`; // Line to next point
  });

  return d;
}

function drawMotionPath1(points, options = {}) {
  const { 
    color = "", 
    width = 2, 
    id = "motion-path-svg", 
    curviness = 0.5,
    showMarkers = false, // ✅ new option
    markerColor = "blue",
    markerRadius = 4
  } = options;

  const svgNS = "http://www.w3.org/2000/svg";

  // ✅ use GSAP to generate a "rawPath" (array of curves) from your anchor points
  const rawPath = MotionPathPlugin.arrayToRawPath(points, { curviness });

  // ✅ convert rawPath into SVG-compatible "d" string
  const pathStr = MotionPathPlugin.rawPathToString(rawPath);

  // create SVG container
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("id", id);
  svg.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
  `;

  // create <path>
  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", pathStr);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", color);
  path.setAttribute("stroke-width", width);
  path.setAttribute("vector-effect", "non-scaling-stroke");

  svg.appendChild(path);

  // ✅ If markers are enabled, draw small circles at each anchor point
  if (showMarkers) {
    points.forEach((pt, i) => {
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", pt.x);
      circle.setAttribute("cy", pt.y);
      circle.setAttribute("r", markerRadius);
      circle.setAttribute("fill", markerColor);
      circle.setAttribute("stroke", "#fff");
      circle.setAttribute("stroke-width", 1);

      // optional: add index label
      const text = document.createElementNS(svgNS, "text");
      text.setAttribute("x", pt.x + 8);
      text.setAttribute("y", pt.y + 4);
      text.setAttribute("font-size", "12");
      text.setAttribute("fill", markerColor);
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
  const startpoint = getElemRect({ el: ".img-sec" });
  const firstSection = getElemRect({ el: ".ref-1", hasgrandParent: true });
  const secondSection = getElemRect({ el: ".ref-2", hasgrandParent: true });
  const thirdSection = getElemRect({ el: ".ref-3", hasgrandParent: true });
  const endpoint = getElemRect({ el: ".ref-4" });

  const motionPath = [
    { x: startpoint.center.x, y: startpoint.center.y },
    { x: startpoint.center.x, y: startpoint.center.y + 50 },
    { x: startpoint.bottomCenter.x, y: startpoint.bottomCenter.y},

    { x: firstSection.topCenter.x, y: firstSection.topCenter.y },
    { x: firstSection.topCenter.x, y: firstSection.topCenter.y + 200 },
    { x: firstSection.center.x, y: firstSection.center.y },
    { x: firstSection.bottomCenter.x, y: firstSection.bottomCenter.y - 200 },
    { x: firstSection.bottomCenter.x, y: firstSection.bottomCenter.y },
    
    { x: secondSection.topCenter.x, y: secondSection.topCenter.y },
    { x: secondSection.topCenter.x, y: secondSection.topCenter.y + 200 },
    { x: secondSection.center.x, y: secondSection.center.y },
    { x: secondSection.bottomCenter.x, y: secondSection.bottomCenter.y - 200 },
    { x: secondSection.bottomCenter.x, y: secondSection.bottomCenter.y },

    { x: thirdSection.topCenter.x, y: thirdSection.topCenter.y },
    { x: thirdSection.topCenter.x, y: thirdSection.topCenter.y + 200 },
    { x: thirdSection.center.x, y: thirdSection.center.y },
    { x: thirdSection.bottomCenter.x, y: thirdSection.bottomCenter.y - 300 },
    { x: thirdSection.bottomCenter.x, y: thirdSection.bottomCenter.y },

    { x: endpoint.topCenter.x, y: endpoint.topCenter.y - 200 },
    { x: endpoint.topCenter.x, y: endpoint.topCenter.y },
    { x: endpoint.center.x, y: endpoint.center.y }
  ];

  // drawMotionPath1(motionPath, { color: "red", width: 2 });
  drawMotionPath1(motionPath, { curviness: 1.2 });

  // collect all sections
  let sections = gsap.utils.toArray(".has-path");
  const path = document.querySelector("#motion-path-svg path");
  
  // timeline across all sections
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: sections[0],     // start at first section
      endTrigger: sections[sections.length - 1], // end at last section
      start: "20%",
      end: `+=${path.getBoundingClientRect().height}`, // <-- use path length for scroll distance
      scrub: 0.5,
      markers: true
    }
  });

  // motionPath controlled by scroll
  tl.to(".model-maker-canvas", {
    motionPath: {
      path: path,
      align: path,
      alignOrigin: [0.5, 0.5],
      // autofocus: true,
      autoRotate: -90 
    },
    ease: "none" // important for scroll sync
  }, 0);
  const bodyClasses = ["theme-1", "theme-2", "theme-3", "theme-4"]; // or bg colors
  const bgColors   = ["#FFFFFF", "#D0011C", "#914C9D", "#F57F20", "#FFFFFF"]; // optional

  sections.forEach((sec, i) => {
    ScrollTrigger.create({
      trigger: sec,
      start: "top center",
      end: i === sections.length - 1 ? "bottom bottom" : "bottom center", // ✅ different end for last section
      onEnter: () => {
        // if you want classes
        document.body.className = bodyClasses[i];

        // OR if you want smooth bg color fade
        gsap.to(document.body, { backgroundColor: bgColors[i], duration: 1 });
      },
      onEnterBack: () => {
        document.body.className = bodyClasses[i];
        gsap.to(document.body, { backgroundColor: bgColors[i], duration: 1 });
      }
    });
  });
  
});


