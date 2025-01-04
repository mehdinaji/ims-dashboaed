document.addEventListener("DOMContentLoaded", function() {
    const shopElements = document.querySelectorAll('#shop');

    shopElements.forEach(shopElement => {
    const shopContent = shopElement.textContent;
    const newContent = `<span>${shopContent[0]}</span> ${shopContent}`;
    shopElement.innerHTML = newContent;
    });
});

