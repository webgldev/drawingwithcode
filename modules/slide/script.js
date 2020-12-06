const $head = document.querySelector("head");
const swiperScript = document.createElement("script");

// Swiper slide
$head.appendChild(swiperScript);
swiperScript.src = "https://unpkg.com/swiper/swiper-bundle.js";
swiperScript.onload = function () {
  new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    // prev button, next button
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};


// Slide image
let imageList = [
  "./img/1.png",
  "./img/2.png",
  "./img/3.png",
  "./img/4.png",
  "./img/5.png",
  "./img/6.png",
  "./img/7.png",
  "./img/8.png",
  "./img/9.png",
];

// IIFE
((selector = "body", imageList = []) => {
  const $slider = document.querySelector(selector);
  const $container = document.createElement("div");
  $container.className = "swiper-container";
  const $wrapper = document.createElement("div");
  $wrapper.className = "swiper-wrapper";

  // Image
  imageList.forEach((imageUrl, index) => {
    const $slide = document.createElement("div");
    $slide.className = "swiper-slide";

    const $image = document.createElement("img");
    $image.src = imageUrl;
    $image.setAttribute("alt", `slide${index}`);

    $slide.appendChild($image);
    $wrapper.appendChild($slide);
  });
  
  $container.appendChild($wrapper);
  $slider.appendChild($container);

  // Button (prev, next)
  const $prevbtn = document.createElement("div");
  $prevbtn.className = "swiper-button-prev";
  const $nextbtn = document.createElement("div");
  $nextbtn.className = "swiper-button-next";

  $container.appendChild($prevbtn);
  $container.appendChild($nextbtn);

  // pagination
  const $pagination = document.createElement("div");
  $pagination.className = "swiper-pagination";

  $container.appendChild($pagination);

})(".slider-image", imageList);


// Slide color
((selector = "body", imageList = [], containerName = "swiper1") => {
  const $slider = document.querySelector(selector);
  const $container = document.createElement("div");
  $container.className = "swiper-container";
  $container.id = containerName;
  
  const $wrapper = document.createElement("div");
  $wrapper.className = "swiper-wrapper";

  const isImage = Number($slider.getAttribute("data-image"));

  imageList.forEach((imageUrl, index) => {
    const result = isImage ? createImageBoard(imageUrl, index) : createBoard(index);

    $wrapper.appendChild(result);
  });
  
  $container.appendChild($wrapper);
  $slider.appendChild($container);

  // pagination
  const $pagination = document.createElement("div");
  $pagination.className = "swiper-pagination";

  $container.appendChild($pagination);

})(".slider-color", imageList, "swiper1");

function createImageBoard(imageUrl, index) {
  const $slide = document.createElement("div");
  $slide.className = "swiper-slide";

  const $image = document.createElement("img");
  $image.src = imageUrl;
  $image.setAttribute("alt", `slide${index}`);

  $slide.appendChild($image);
  $wrapper.appendChild($slide);
}

function createBoard(index) {
  const $slide = document.createElement("div");
  $slide.className = "swiper-slide";
  const $board = document.createElement("div");
  $board.className = `board board-${index + 1}`;

  $slide.appendChild($board);

  return $slide;
}

// Swiper style
function loadStyle(href, callback) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].href == href) {
      return;
    }
  }
  var head = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;
  if (callback) {
    link.onload = function() {
      callback();
    };
  }
  head.prepend(link);
}

loadStyle("https://unpkg.com/swiper/swiper-bundle.css");