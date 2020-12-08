// 1-스크롤 상관없이 애니메이션 바로 실행
// let text = document.getElementById('text');
// window.addEventListener('scroll', function() {
//   let value = window.scrollY;
//   text.style.marginBottom = value * 1 + 'px';
// });


// 2-스크롤 내렸다가 올리면 애니메이션이 다시 실행

// 2-1 forEach 리플로우, 리페인트 이벤트 발생
// let text = document.getElementById("text");
// let images = document.querySelectorAll(".clouds > img");

// function imageAnimate(scrollY) {
//   let bannerHeight = document.querySelector(".top").clientHeight;
//   images.forEach( (item) => {
//     if (scrollY >= bannerHeight) {
//       if (!item.classList.contains("pause")) {
//         item.classList.add("pause")
//       }
//     } else {
//       if (item.classList.contains("pause")) {
//         item.classList.remove("pause")
//       }
//     }
//   })
// }

// 2-2 이미지를 감싸는 div에 애니메이션 적용
let text = document.getElementById("text");
let imageWrapper = document.querySelector(".clouds");

function imageAnimate(scrollY) {
  let bannerHeight = document.querySelector(".top").clientHeight;

    if (scrollY >= bannerHeight) {
      if (!imageWrapper.classList.contains("pause")) {
        imageWrapper.classList.add("pause")
      }
    } else {
      if (imageWrapper.classList.contains("pause")) {
        imageWrapper.classList.remove("pause")
      }
    }
}

window.addEventListener("load", function() {
  let value = window.scrollY;
  imageAnimate(value)
})

window.addEventListener("scroll", function() {
  let value = window.scrollY;

  imageAnimate(value);

  text.style.marginBottom = value * 2 + 'px';
})