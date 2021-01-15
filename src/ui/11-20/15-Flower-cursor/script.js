const pointer  = document.querySelector('#pointer');
const pointer2 = document.querySelector('#pointer2');

window.addEventListener('mousemove', function (e) {
  let xValue = e.pageX;
  let yValue = e.pageY;

  function change() {
    pointer.style.top   = `${yValue}px`;
    pointer.style.left  = `${xValue}px`;
    pointer2.style.top  = `${yValue}px`;
    pointer2.style.left = `${xValue}px`;
  }
  setTimeout(change, 100);
})
