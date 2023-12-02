var containerElement = document.getElementById("container");

var colors = ["#A9A9A9", "#FECDA6", "#FF9130", "#FF5B22"];
var quantity = 50;
var blurs = ["0", "5px"];
var sizes = ["2px", "4px", "8px"];
var width = containerElement.clientWidth;
var height = containerElement.clientHeight;

for (let i = 0; i < quantity; i++) {
  createSpot();
}

function createSpot() {
  var spotElement = document.createElement("div");
  spotElement.classList.add("spot");

  var size = getRandomItem(sizes);

  spotElement.style.position = "absolute";
  spotElement.style.width = size;
  spotElement.style.height = size;
  spotElement.style.left = `${Math.random() * width}px`;
  spotElement.style.top = `${Math.random() * height}px`;
  spotElement.style.filter = `blur(${getRandomItem(blurs)})`;
  spotElement.style.backgroundColor = getRandomItem(colors);

  spotElement.style.animationDuration = `${Math.random() * 4 + 1}s`;

  containerElement.append(spotElement);
}

function getRandomItem(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
