gsap.registerPlugin(ScrollTrigger);

const main = document.querySelector("#main")
const cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function(e) {
    gsap.to(cursor, {
        x: e.x - 0.5 * cursor.clientHeight,
        y: e.y - 0.5 * cursor.clientWidth,
        duration: 0.1
    })
})

const navbar = document.querySelector('#nav');
const hero = document.querySelector('#hero');

gsap.to(navbar, {
    backgroundColor: "#fff",
    boxShadow: "0 7px 12px -10px rgba(0, 0, 0, .2)",
    duration: 0.2,
    scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=1",
        scrub: true,
        toggleAction: "play none none reverse",
    }
})

gsap.from(".big_text_wrapper.up", {
    y: 100,
    repeat: -1,
    yoyo: true,
    duration: 2.5,
    ease: "power3.inOut"
})

gsap.to(".big_text_wrapper.down", {
    y: 100,
    repeat: -1,
    yoyo: true,
    duration: 2.5,
    ease: "power3.inOut"
})

const marquee = document.querySelector(".marquee_wrapper.width");

gsap.to(".marquee_text", {
    x: -marquee.clientWidth,
    repeat: -1,
    duration: 20,
    ease: "linear"
})

gsap.to(".dynamic_circle", {
    scale: 100,
    scrollTrigger: {
        trigger: ".dynamic",
        start: "top 170px",
        scrub: 0.5
    }
})