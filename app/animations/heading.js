import { animate, stagger } from "motion";
import SplitType from 'split-type'

function initializeHeadingAnimation() {
    const headings = document.getElementsByTagName("h1");
    
    Array.from(headings).forEach((heading) => {
        new SplitType(heading, { types: 'words' });
        const words = heading.getElementsByClassName("word");
        
        animate(words, {
            opacity: [0, 1],
            y: [30, 0],
            rotateZ: [10, 0],
        }, {
            delay: stagger(0.2),
            easing: "ease-in-out",
            duration: 0.6,
        })
    });
}

export default initializeHeadingAnimation;