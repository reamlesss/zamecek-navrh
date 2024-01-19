const reserveFormButton = document.getElementById("reserve-form-button");
const reserveForm = document.getElementById("reserve-form");

document.addEventListener("DOMContentLoaded", function () {
  reserveFormButton.addEventListener("click", function () {
    reserveForm.scrollIntoView({ behavior: "smooth", block: "start" });
    
  });
});
