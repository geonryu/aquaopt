gsap.to("#jsCube", {
    scrollTrigger : {
        trigger: ".section-innovation",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none play reverse",
        scrub: true
    },
    rotateX : -20,
    scale: 1.5
});
gsap.to(".mobile-demo-mockup", {
    scrollTrigger : {
        trigger: ".section-innovation",
        start: "top 30%",
        end: "bottom top",
        toggleActions: "play none play reverse"
    },
    scale: 1,
    opacity : 1
});