document.addEventListener("DOMContentLoaded", function () {
  const stockCells = document.querySelectorAll("td#stock");

  stockCells.forEach((stockCell) => {
    const stockValue = parseInt(stockCell.textContent.trim(), 10);

    const circle = document.createElement("span");
    circle.style.width = "10px";
    circle.style.height = "10px";
    circle.style.display = "inline-block";
    circle.style.borderRadius = "50%";
    circle.style.marginLeft = "8px";

    if (stockValue < 20) {
      circle.style.backgroundColor = "red";
      circle.classList.add("animated-circle");
    } else if (stockValue < 100) {
      circle.style.backgroundColor = "gold";
    } else {
      circle.style.backgroundColor = "green";
    }

    stockCell.textContent = stockCell.textContent.trim();
    stockCell.insertBefore(circle, stockCell.firstChild);
  });
});
