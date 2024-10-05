'use strict'

gsap.from(".content", {
    duration: 1,
    x: 50,
    opacity: 0,
    ease: "power3.out"
});
gsap.from(".container", {
    duration: 1,
    x: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});
gsap.from(".content-about", {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".image img", {
    duration: 1,
    x: 100,
    scale: 0,
    ease: "bounce.out",
    delay: 0.5
});