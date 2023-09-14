import { animate } from "motion";

function initializeLogoAnimation() {
    const logo = document.getElementById("logo");
    
    animate(logo, {
        opacity: [0, 1],
        y: [20, 0],
    }, {
        delay: 1.5,
        easing: "ease-in-out",
        duration: 1,
    })
}

export default initializeLogoAnimation;