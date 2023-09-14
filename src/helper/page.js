import barba from '@barba/core';
import { animate } from 'motion';

function initializePageTransition() {
    barba.init({
        sync: true,
        transitions: [{
            name: 'opacity-transition',
            async leave(data) {
                animate(data.current.container, {
                    opacity: 0,
                    display: "none"
                })
                await animate('#pagetransition', { 
                    transform: "translateY(0%)"
                }, {
                    duration: 1,
                }).finished;

            },
            async enter(data) {
                await animate('#pagetransition', { 
                    transform: "translateY(-100%)"
                }, {
                    duration: 1,
                }).finished;
            }
        }]
    });
}

export default initializePageTransition;