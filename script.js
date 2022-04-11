const progressBar = document.getElementById("progressBar");
const progressBarWidth = parseInt(window.getComputedStyle(progressBar).getPropertyValue('width'));
const barContent = document.getElementById("content");
const max = document.getElementById("max");
const fill = document.getElementById("fill");

var maxValue = 100; // default value
var fillValue = 25; // default value

function fillProgressBar() {
  barContent.style.width = (progressBarWidth * (fillValue / maxValue)) + "px";
}

window.addEventListener("load", function(){
  fillProgressBar();
});

max.addEventListener("input", function () {
  maxValue = max.value;
  fillProgressBar();
});

fill.addEventListener("input", function () {
  fillValue = fill.value;
  fillProgressBar();
});
