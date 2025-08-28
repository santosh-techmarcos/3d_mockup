import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function getElemRect({ el, hasParent = false, elemAlignment = 'center' }) {
  // allow string or element
  if (typeof el === "string") {
    el = document.querySelector(el);
  }
  if (!el) return null;

  // choose target element (itself or parent)
  const target = hasParent ? el.parentElement : el;
  if (!target) return null;

  const rect = target.getBoundingClientRect();

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  // key points
  const points = {
    center: {
      x: rect.left + rect.width / 2 + scrollX,
      y: rect.top + rect.height / 2 + scrollY
    },
    topCenter: {
      x: rect.left + rect.width / 2 + scrollX,
      y: rect.top + scrollY
    },
    bottomCenter: {
      x: rect.left + rect.width / 2 + scrollX,
      y: rect.top + rect.height + scrollY
    }
  };

  // debug highlight
  target.style.outline = "2px dashed " + (hasParent ? "blue" : "red");

  return points;
}



// let path = [{ x: start.x, y: start.y }];

// draw debug dots
const pos = getElemRect({ el: ".main-img", hasParent: true });
console.log("center:", pos.center);
console.log("top center:", pos.topCenter);
console.log("bottom center:", pos.bottomCenter);

// Draw helper dots
Object.values(pos).forEach((p) => {
  const dot = document.createElement("div");
  dot.style.cssText = `
    width:10px;height:10px;background:green;
    border-radius:50%;position:absolute;z-index:999;
    top:${p.y - 5}px;left:${p.x - 5}px;
  `;
  document.body.appendChild(dot);
});

