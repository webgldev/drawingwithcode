let intro = document.querySelector(".intro");
let splitText = intro.querySelector(".splite-text");
let arr = splitText.innerText.split("");
let html = "";

for (let i = 0; i < arr.length; i++) {
  html += '<span>' + arr[i] + '</span>';
}

splitText.innerHTML = html;

let clone = splitText.cloneNode(true);
clone.classList.add("clone");
intro.appendChild(clone);

let chars = [...splitText.querySelectorAll("span")];
let timelineCompleted = true;
let tl = gsap.timeline({
  onComplete: () => {
    timelineCompleted = true;
  }
});

const onTextHover = () => {
  if (!timelineCompleted) return;
  timelineCompleted = false;

  targetChars = chars.filter(o => Math.random() < 0.5);
  tl.to(targetChars, {
    duration: 0.3,
    ease: Quad.easeIn,
    y: '-100%',
    opacity: 0,
    stagger: {
      amount: 0.3,
      from: 'random'
    }
  }).to(targetChars, {
    duration: 0.5,
    ease: Quint.easeOut,
    startAt: {
      y: '50%'
    },
    y: '0%',
    opacity: 1,
    stagger: {
      amount: 0.3,
      from: 'random'
    }
  });
};

intro.addEventListener("mouseenter", onTextHover);