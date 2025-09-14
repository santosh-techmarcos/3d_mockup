import './script/gsap.js';
import './script/3dmodel.js';
import './script/mix.js';
import './styles/main.scss';

let resetHeadTimeout;
let isHeadVisible = false;

const siteHeader = document.querySelector('.site-header');
const headHeight = siteHeader ? siteHeader.offsetHeight : 0;
let prevScrollpos = window.scrollY; // ✅ declare before onScroll()

export function onScroll() {
  const currentScrollPos = window.scrollY;

  if (prevScrollpos >= currentScrollPos) {
    if (currentScrollPos > headHeight) {
      siteHeader?.classList.add('nav-down', 'scroll');
    } else {
      siteHeader?.classList.remove('nav-down', 'scroll');
    }
    document.getElementById('head').style.transform = 'translateY(0)';
    siteHeader?.classList.add('y-moved');
    siteHeader?.classList.remove('reset');
  } else {
    if (!document.body.classList.contains('header-open')) {
      document.getElementById('head').style.transform = 'translateY(-100%)';
    }
    siteHeader?.classList.remove('y-moved');
    siteHeader?.classList.add('reset');
  }

  prevScrollpos = currentScrollPos > 0 ? currentScrollPos : 0;
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // ✅ now safe, after prevScrollpos exists

if (window.innerWidth >= 1200) {
  const head = document.getElementById('head');
  if (head) {
    if (head.style.transform === 'translateY(-100%)') {
      onScroll();
      isHeadVisible = true;
    }
    clearTimeout(resetHeadTimeout);
    resetHeadTimeout = setTimeout(() => {
      if (isHeadVisible) {
        head.style.transform = 'translateY(-100%)';
        isHeadVisible = false;
      }
    }, 3000);
  }
}
