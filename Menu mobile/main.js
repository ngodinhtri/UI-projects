var menuElement = document.getElementById("menu");

menuElement.addEventListener("click", function handleClick(e) {
  var item = e.target.closest("li");
  if (!item) return;

  var activeElement = document.getElementById("active");
  activeElement.style.left = `${item.offsetLeft}px`;
});
