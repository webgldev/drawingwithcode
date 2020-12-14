Splitting();

const contentSection = document.querySelectorAll(".section.content");
const xValues = ["0%","70%","300%"];
const yValues = ["0%","70%","-100%"];

contentSection.forEach((current, index, array) => {
  // .chars : data-splitting을 통해 split된 DOM Element 내 모든 character들을 담고 있는 array
  // @ https://greensock.com/docs/v3/Plugins/SplitText/chars
  gsap.from(current.querySelectorAll(".char"), {
    scrollTrigger: {
      trigger: current,
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: true
    },
    opacity: 0,
    scale: .3,
    x: xValues[index],
    y: yValues[index],
    stagger: {
      amount: 1.5
    }
  });
});