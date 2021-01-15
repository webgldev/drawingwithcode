var container = document.getElementById('container');

container.onclick = function() {
  if (container.className.includes("slide")) {
      container.className = "container";
  } else {
      container.className += " slide";
  }
}