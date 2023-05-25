import initializeHeadingAnimation from "./heading";
import initializeLogoAnimation from "./logo";
import initializePageTransition from "./page";
import initializeLinkAnimations from "./links";

async function initializeAnimations()  {
    initializePageTransition();
    initializeHeadingAnimation();
    initializeLinkAnimations();
    initializeLogoAnimation();
}

export default initializeAnimations;