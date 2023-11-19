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
  particles.forEach(addParticleElement);

  function addParticleElement(element) {
    var particleElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    particleElement.setAttribute("class", "particle");
    particleElement.setAttribute("id", `particles_${element.id}`);
    particleElement.setAttribute("cy", element.top);
    particleElement.setAttribute("cx", element.left);
    particleElement.setAttribute("r", radiusOfCircle);

    svgElement.append(particleElement);
  }
}

function createParticle(id, width, height) {
  return {
    id,
    top: Math.floor(Math.random() * height),
    left: Math.floor(Math.random() * width),
  };
}
