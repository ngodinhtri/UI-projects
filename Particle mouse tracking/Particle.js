export default class Particle {
  constructor(id, top, left) {
    this.id = id;
    this.top = top;
    this.left = left;
  }

  drawParticle(radius, parentElement) {
    var particleElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    particleElement.setAttribute("class", "particle");
    particleElement.setAttribute("id", `particles_${this.id}`);
    particleElement.setAttribute("cy", this.top);
    particleElement.setAttribute("cx", this.left);
    particleElement.setAttribute("r", radius);

    parentElement.append(particleElement);
  }

  drawLine(xMouse, yMouse, parentElement) {
    var lineElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    lineElement.setAttribute("class", "line");
    lineElement.setAttribute("id", `line_${this.id}`);
    lineElement.setAttribute("x1", this.left);
    lineElement.setAttribute("y1", this.top);
    lineElement.setAttribute("x2", xMouse);
    lineElement.setAttribute("y2", yMouse);
    lineElement.setAttribute("stroke", "black");
    lineElement.setAttribute("stroke-width", "2w");

    parentElement.append(lineElement);
  }

  isNearMousePosition(xMouse, yMouse) {
    return (
      Math.abs(this.top - yMouse) <= 300 && Math.abs(this.left - xMouse) <= 300
    );
  }
}
