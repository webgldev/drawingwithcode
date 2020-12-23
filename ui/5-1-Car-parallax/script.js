// 수정 전 중복 코드
// var layer1 = document.getElementById('layer1')
// scroll = window.pageYOffset;
// document.addEventListener('scroll', function (e) {
//   var offset = window.pageYOffset;
//   scroll = offset;
//   layer1.style.width = (100 + scroll/5) + '%';
// });

// var layer2 = document.getElementById('layer2')
// scroll = window.pageYOffset;
// document.addEventListener('scroll', function (e) {
//   var offset = window.pageYOffset;
//   scroll = offset;
//   layer2.style.width = (100 + scroll/5) + '%';
//   layer2.style.left  = scroll/5 + '%';
// });

// var text = document.getElementById('text')
// scroll = window.pageYOffset;
// document.addEventListener('scroll', function (e) {
//   var offset = window.pageYOffset;
//   scroll = offset;
//   text.style.top  = - scroll/20 + '%';
// });


// 수정 후 중복코드 제거
var LEFT = 0.4;
var layer2 = document.getElementById("layer2"), 
    text = document.getElementById("text"), 
    scroll = window.pageYOffset,
    left = window.innerWidth * LEFT;

    layer1.style.left = left + 'px';

function styleEdit() {
  scroll = window.pageYOffset;

  layer1.style.width = (100 + scroll / 10) + "%";
  layer1.style.left = left - (scroll * 1) + "px";
  
  layer2.style.width = (75 + scroll / 10) + "%";
  layer2.style.right = -(scroll * 6) + "px";

  text.style.bottom = - (5 * scroll / 10) + "%";
}

window.addEventListener("resize", function(e) {
  windowWidth = window.innerWidth
  left = windowWidth * LEFT;

  styleEdit(scroll, left);
});

document.addEventListener("scroll", function (e) {
  styleEdit(scroll, left);
});

