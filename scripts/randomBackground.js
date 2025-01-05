document.addEventListener("DOMContentLoaded", function() {
  const randomClassNumber = Math.floor(Math.random() * 10) + 1;
  const element = document.getElementById("light-bg");
  if (element) {
    element.classList.add(`bg-${randomClassNumber}`);
  }
});
