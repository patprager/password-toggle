function toggleButton() {
  const pwButton = document.getElementById("hide-show").innerHTML;
  const pwField = document.getElementById("password");

  if (pwButton === "Show Password") {
    pwField.setAttribute("type", "text");
    document.getElementById("hide-show").innerHTML = "Hide Password";
  } else {
    pwField.setAttribute("input", "text");
    document.getElementById("hide-show").innerHTML = "Show Password";
  }
}

window.addEventListener("load", function () {
  const show = this.document.getElementById("hide-show");
  show.addEventListener("click", toggleButton);
});
