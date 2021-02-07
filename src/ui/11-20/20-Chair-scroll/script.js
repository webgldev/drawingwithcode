
gsap.set(".circle", { yPercent: -5});
gsap.set(".dots-yellow", { yPercent: 10});
gsap.set(".chair", { yPercent: -20});
gsap.set(".cluster-great", { yPercent: 5});

gsap.to(".circle", {
  yPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster-great",
    scrub: 1
  }, 
});

gsap.to(".dots-yellow", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster-great",
    scrub: 1
  }, 
});


gsap.to(".chair", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster-great",
    scrub: 1
  }, 
});

gsap.to(".caption", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster-great",
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".cluster-great", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster-great",
    end: "bottom center",
    scrub: 1
  }, 
});







gsap.set(".triangle", { yPercent: 25, rotation:-90});
gsap.set(".dots-white", { yPercent: 10});
gsap.set(".chair-area", { yPercent: -20});
gsap.set(".cluster-area", { yPercent: 5});

gsap.to(".triangle", {
  yPercent: -5,
  rotation: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster-area",
    scrub: 1
  }, 
});

gsap.to(".dots-white", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster-area",
    scrub: 1
  }, 
});

gsap.to(".chair-area", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster-area",
    scrub: 1
  }, 
});

gsap.to(".caption-area", {
  yPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster-area",
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".cluster-area", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".cluster-area",
    end: "bottom center",
    scrub: 1
  }, 
});







var tlSplitGreat = gsap.timeline({onComplete: () => {SplitGreat.revert()}}), 
    SplitGreat = new SplitText(".title-split", {type:"words,chars"}), 
    chars = SplitGreat.chars;


tlSplitGreat.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
}, "+=0");







function setupSplits() {
  
var tlSplitBurrowing = gsap.timeline(), 
    SplitBurrowing = new SplitText(".title-area", {type:"words,chars"}), 
    chars = SplitBurrowing.chars;


tlSplitBurrowing.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".title-area",
    start: "top 75%",
   end: "bottom center",
    scrub:1
  }
}, "+=0");
};

ScrollTrigger.addEventListener("refresh", setupSplits);

setupSplits();
