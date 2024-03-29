const boxes = document.querySelectorAll(".s-img");

var action = gsap.timeline({
    defaults: { duration: 1, ease: 'none' },
    scrollTrigger: {
        trigger: ".images",
        scrub: 0.3,
        start: "top top",
        end: "bottom top",
        markers: true
    }
})
    .to(boxes, { scale: 1.1, stagger: 3 })