import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Lenis from 'lenis'


// ✅ Register all plugins once here
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export { gsap, ScrollTrigger, MotionPathPlugin };

// ================ Utility Functions =================

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


export function getSvgPath(points, { id = "motion-path-svg", color = "red", curviness = 0.5, showMarkers = false, } = {}) {
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
  path.setAttribute("stroke-width", showMarkers ? 2 : 0); // static width
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
  // document.body.appendChild(svg);
  return svg;
}



// ================ Lenis Setup =================
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