mouseTracker();

function mouseTracker() {
  var svgElement = document.getElementById("svg");

  var particles = [];

  const heightWindows = document.documentElement.clientHeight;
  const widthWindows = document.documentElement.clientWidth;
  const numberOfParticles = 50;
  const radiusOfCircle = 5;

  //create particles
  for (let i = 0; i < numberOfParticles; i++) {
    var particle = createParticle(i, widthWindows, heightWindows);
    particles.push(particle);
  }

  //add particles into svg
  for (let i = 0; i < numberOfParticles; i++) {
    addParticleElement(particles[i], radiusOfCircle, svgElement);
  }

  //mouse tracking
  document.addEventListener("mousemove", function handleMouseMove(e) {
    removeOldLines();

    var nearParticles = particles.filter(function isNearMousePosition(
      particle
    ) {
      return (
        Math.abs(particle.top - e.clientY) <= 300 &&
        Math.abs(particle.left - e.clientX) <= 300
      );
    });

    nearParticles.forEach(function strokeLine(particle) {
      var newLine = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      newLine.setAttribute("class", "line");
      newLine.setAttribute("x1", particle.left);
      newLine.setAttribute("y1", particle.top);
      newLine.setAttribute("x2", e.clientX);
      newLine.setAttribute("y2", e.clientY);
      newLine.setAttribute("stroke", "black");
      newLine.setAttribute("stroke-width", "2w");

      svgElement.append(newLine);
    });
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
}

function createParticle(id, width, height) {
  return {
    id,
    top: Math.floor(Math.random() * height),
    left: Math.floor(Math.random() * width),
  };
}

function addParticleElement(particle, radiusOfCircle, svgElement) {
  var particleElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  particleElement.setAttribute("class", "particle");
  particleElement.setAttribute("id", `particles_${particle.id}`);
  particleElement.setAttribute("cy", particle.top);
  particleElement.setAttribute("cx", particle.left);
  particleElement.setAttribute("r", radiusOfCircle);

  svgElement.append(particleElement);
}

function removeOldLines() {
  var oldLines = document.querySelectorAll("line");

  oldLines.forEach(function removeLine(line) {
    line.remove();
  });
}
