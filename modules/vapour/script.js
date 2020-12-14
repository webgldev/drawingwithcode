function notSame( array, n ) {
  return array.every((e) => n !== e);
}

function randNumberGenerator(MaxNum){
  return parseInt(Math.random() * MaxNum) + 1;
}

function getRandom(num) {
  let indexArr = [];

  while (indexArr.length < num) {
    let number = randNumberGenerator(num);
    if (notSame(indexArr, number)) {
      indexArr.push(number);
    }
  }
  return indexArr;
}

// IIFE
(( {selector = "body", count = 20, delay = -0.5, vcolor = "#fff", vblur = 8}) => {
  let vapourDelay = delay;

  const COUNT = count;
  const $parentEl = document.querySelector(selector);
  const $vapour = document.createElement("div");
  $vapour.className = "vapour";

  getRandom(COUNT).forEach((item) => {
    const $vapourEl = document.createElement("span");
    $vapourEl.style.animationDelay = `${item * vapourDelay}s`;
    $vapourEl.style.background = vcolor;
    $vapourEl.style.filter = `blur(${vblur}px)`;
    $vapour.append($vapourEl);
  });
  $parentEl.append($vapour);
})({});
