import raf from "./helper/scrolling.js";
import initializeAnimations from "./animations/initialize.js";

function init() {
    requestAnimationFrame(raf);
    initializeAnimations();
}

init();