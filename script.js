const toggleButton = document.querySelector("#hide-show");
toggleButton.addEventListener("click", function () {
  const passwordInput = document.querySelector("#password-input");
  const currentType = passwordInput.getAttribute("type");

  if (currentType === "password") {
    passwordInput.setAttribute("type", "text");
    toggleButton.innerHTML = "Hide Password";
  } else {
    passwordInput.setAttribute("type", "password");
    toggleButton.innerHTML = "Show Password";
  }
});
