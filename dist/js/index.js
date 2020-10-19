// let tl = gsap.timeline({
//   // yes, we can add it to an entire timeline!
//   scrollTrigger: {
//     trigger: ".textrr",
//     pin: true, // pin the trigger element while active
//     start: "top center", // when the top of the trigger hits the top of the viewport
//     end: "+=200", // end after scrolling 500px beyond the start
//     scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//   },
// });

let tl = new gsap.timeline({ pause: true });

// tl.to(".toggle-btn", 0.8, { rotation: 720, ease: "easeInOut" });
tl.to(".three", 0.1, { rotation: 90, ease: "easeInOut", opacity: 0 })
  .to(".one", 0.8, { x: 8, y: 9, rotation: 45, ease: "easeInOut" })
  .to(".two", 0.8, {
    x: 6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.8,
    width: 40,
  })
  .to(".three", 0.1, { rotation: 90, ease: "easeInOut", opacity: 0 })
  .to(".nav-menu", 0.3, { top: 0, ease: "easeInOut", delay: -1 })
  .staggerFrom(
    ".nav-menu ul li",
    0.5,
    { x: -200, opacity: 0, ease: "easeInOut" },
    0.15
  );

tl.reverse();

const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  tl.reversed(!tl.reversed());
});
