import initializeHeadingAnimation from "./heading";
import initializeLogoAnimation from "./logo";
import initializePageTransition from "./page";
import initializeLinkAnimations from "./links";

async function initializeAnimations()  {
    initializePageTransition();
    // base delay of pagetransition 
    initializeHeadingAnimation();
    initializeLogoAnimation();
    initializeLinkAnimations();
}

export default initializeAnimations;