import { animate } from 'motion';

function initializeLinkAnimations() {
    const links = document.getElementsByClassName('link');
    animate(links, {
        opacity: [0, 1],
        y: [20, 0],
    }, {
        delay: 2.5,
        easing: "ease-in-out",
        duration: 1,
    })
}

export default initializeLinkAnimations;