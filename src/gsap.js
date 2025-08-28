import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

function getElemRect({ el, hasParent = false, hasgrandParent = false, markers = false, markersText = false }) {
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

  // Outline target element
  if (debugTarget) {
    debugTarget.style.outline = `1px dashed ${color}`;
    // debugTarget.style.outlineOffset = "-2px"; // avoid margin issues
  }

  // Optional markers
  if (markers) {
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


function drawMotionPath(points, options = {}) {
  const { color = "red", width = 2, id = "motion-path-svg" } = options;

  const svgNS = "http://www.w3.org/2000/svg";
  const pathStr = getSvgPathFromPoints(points);

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

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", pathStr);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", color);
  path.setAttribute("stroke-width", width);
  path.setAttribute("vector-effect", "non-scaling-stroke");

  svg.appendChild(path);
  document.body.appendChild(svg);

  return svg;
}

function  drawMotionPath1(points, options = {}) {
  const { color = "red", width = 2, id = "motion-path-svg" } = options;

  const svgNS = "http://www.w3.org/2000/svg";
  const pathStr = getSvgPathFromPoints(points);

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

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", pathStr);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", color);
  path.setAttribute("stroke-width", width);
  path.setAttribute("vector-effect", "non-scaling-stroke");

  svg.appendChild(path);
  document.body.appendChild(svg);

  return svg;
}

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

window.addEventListener("load", () => {
  // Element itself (red)
  const startpoint = getElemRect({ el: ".img-sec", markers: true });
  // Relative to grandparent (orange)
  const ref1 = getElemRect({ el: ".ref-1", hasgrandParent: true, markers: true });
  // Relative to parent (blue)
  const ref2 = getElemRect({ el: ".ref-2", hasgrandParent: true, markers: true, markersText: true });

  const ref3 = getElemRect({ el: ".ref-3", hasgrandParent: true, markers: true });

  const ref4 = getElemRect({ el: ".ref-4", markers: true });



  const motionPath = [
    { x: startpoint.bottomCenter.x, y: startpoint.bottomCenter.y },
    { x: ref1.topCenter.x, y: ref1.topCenter.y },
    { x: ref1.bottomCenter.x, y: ref1.bottomCenter.y },
    { x: ref2.topCenter.x, y: ref2.topCenter.y },
    { x: ref2.bottomCenter.x, y: ref2.bottomCenter.y },
    { x: ref3.topCenter.x, y: ref3.topCenter.y },
    { x: ref3.bottomCenter.x, y: ref3.bottomCenter.y },
    { x: ref4.center.x, y: ref4.center.y },
    // { x: ref4.center.x, y: ref4.center.y }
  ];

  
  drawMotionPath1(motionPath, {
    color: "blue",
    width: 3
  });

  // gsap.set(".main-img", { xPercent: -50, yPercent: -50, position: "absolute" });

  gsap.to(".main-img", {
    motionPath: {
      path: "#motion-path-svg path",
      align: "#motion-path-svg path",
      alignOrigin: [0.5, 0.5],
      curviness: 1.5,
    },
    delay: 2,
    duration: 10,
    ease: "linear",
  });
});



