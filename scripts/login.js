document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".btn");
  const mobileInput = document.getElementById("mobile");
  const passwordInput = document.getElementById("password");

  // Hardcoded credentials
  const validMobile = "09912054575";
  const validPassword = "1308";

  loginButton.addEventListener("click", function () {
    const enteredMobile = mobileInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    if (enteredMobile === validMobile && enteredPassword === validPassword) {
      localStorage.setItem("mobile", enteredMobile);
      localStorage.setItem("isLoggedIn", "true");

      alert("ورود موفقیت آمیز بود!");
      window.location.href = "/pages"; 
    } else {
      alert("شماره موبایل یا رمز عبور اشتباه است.");
    }
  });
});