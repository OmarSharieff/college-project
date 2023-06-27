const emailInput = document.getElementById("email");

emailInput.addEventListener("input", function() {
  if (this.value) {
    this.classList.add("not-empty");
  } else {
    this.classList.remove("not-empty");
  }
});
