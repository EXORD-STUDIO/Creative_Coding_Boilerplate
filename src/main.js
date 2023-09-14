import raf from "./helper/scrolling";
import initializeHeadingAnimation from "./components/heading/heading";
import initializeLogoAnimation from "./components/logo/logo";
import initializePageTransition from "./helper/page";
import initializeLinkAnimations from "./components/links/links";

async function initializeAnimations() {
    console.log("Made by Exord")
    initializePageTransition();
    // base delay of pagetransition
    initializeHeadingAnimation();
    initializeLogoAnimation();
    initializeLinkAnimations();
}

function init() {
    requestAnimationFrame(raf);
    initializeAnimations();
}

init();
