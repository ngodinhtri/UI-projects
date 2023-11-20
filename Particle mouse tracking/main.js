import Particle from "./Particle.js";

app();

function app() {
  var svgElement = document.getElementById("svg");

  var particles = [];

  const heightWindows = document.documentElement.clientHeight;
  const widthWindows = document.documentElement.clientWidth;
  const numberOfParticles = 50;
  const radiusOfCircle = 5;

  //create particles
  for (let i = 0; i < numberOfParticles; i++) {
    var top = Math.floor(Math.random() * heightWindows);
    var left = Math.floor(Math.random() * widthWindows);
    var particle = new Particle(i, top, left);
    particles.push(particle);
  }

  //add particles into svg
  for (let i = 0; i < numberOfParticles; i++) {
    var particle = particles[i];
    particle.drawParticle(radiusOfCircle, svgElement);
  }

  //mouse tracking
  document.addEventListener("mousemove", function handleMouseMove(event) {
    removeOldLines();

    var nearParticles = particles.filter(function isNearParticle(particle) {
      return particle.isNearMousePosition(event.clientX, event.clientY);
    });

    for (let i = 0; i < nearParticles.length; i++) {
      var xMouse = event.clientX;
      var yMouse = event.clientY;
      var nearParticle = nearParticles[i];
      nearParticle.drawLine(xMouse, yMouse, svgElement);
    }
  });
  window.addEventListener("mouseout", (event) => {
    if (
      event.clientY <= 0 ||
      event.clientX <= 0 ||
      event.clientX >= widthWindows ||
      event.clientY >= heightWindows
    ) {
      removeOldLines();
    }
  });

  function removeOldLines() {
    var lineNodes = document.querySelectorAll(".line");
    lineNodes.forEach(function removeLine(lineNode) {
      lineNode.remove();
    });
  }
}
