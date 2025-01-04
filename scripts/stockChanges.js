document.addEventListener("DOMContentLoaded", function () {
  const stockCells = document.querySelectorAll("td#stock-changes");

  stockCells.forEach((stockCell) => {
    const stockValue = parseInt(stockCell.textContent.trim(), 10);

    const circle = document.createElement("span");
    circle.style.width = "12px";
    circle.style.height = "12px";
    circle.style.display = "inline-block";
    circle.style.borderRadius = "50%";
    circle.style.marginLeft = "8px"; 

    if (stockValue > 0) {
      circle.style.backgroundColor = "green";
    }

    stockCell.textContent = stockCell.textContent.trim();
    stockCell.insertBefore(circle, stockCell.firstChild);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const increaseStock = document.getElementById("increase-stock");
  const decreaseStock = document.getElementById("decrease-stock");
  const increaseBox = document.querySelector(".stock-change-box.increase");
  const decreaseBox = document.querySelector(".stock-change-box.decrease");

  function toggleStockChange() {
    if (increaseStock.checked) {
      increaseBox.style.display = "flex";
      decreaseBox.style.display = "none";
    } else if (decreaseStock.checked) {
      increaseBox.style.display = "none";
      decreaseBox.style.display = "flex";
    }
  }

  increaseStock.addEventListener("change", toggleStockChange);
  decreaseStock.addEventListener("change", toggleStockChange);

  toggleStockChange();
});
