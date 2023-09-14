import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
    wheelMultiplier: 0.5,
    duration: 1.2,
    smoothTouch: false,
})
  
lenis.on('scroll', (e) => {
  
})
  
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

export default raf;