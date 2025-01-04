document.addEventListener('DOMContentLoaded', () => {
  formatAndConvertNumbers(document.body);
});
function formatAndConvertNumbers(element) {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  const replaceAndFormatNumbers = (text) =>
    text.replace(/\d+/g, (number) => {
      const formatted = Number(number).toLocaleString('en-US');
      return formatted.replace(/\d/g, (digit) => persianDigits[+digit]);
    });

  element.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.nodeValue = replaceAndFormatNumbers(node.nodeValue);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      formatAndConvertNumbers(node);
    }
  });
}