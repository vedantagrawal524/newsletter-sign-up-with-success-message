// sig-up Card
const signup = document.querySelector(".signup-card");
const form = document.querySelector(".form");
const errorMss = document.querySelector(".error-message");
const emailInput = document.querySelector("#email");

// success Card
const success = document.querySelector(".success-card");
const subscribedEmail = document.querySelector(".subscribed-email");
const dismiss = document.querySelector(".dismiss");

// Operations
function isValidEntry(str) {
     const reg = new RegExp("^[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$", "i");
     return reg.test(str);
}

function showErrors() {
     errorMss.classList.remove("hide");
     emailInput.classList.add("error");
}

function updateSuccessMessage(email) {
     subscribedEmail.textContent = email;
}

function switchSections() {
     signup.classList.toggle("hide");
     success.classList.toggle("hide");
}

form.addEventListener("submit", (e) => {
     e.preventDefault();
     const valid = isValidEntry(emailInput.value);
     if (!valid) {
          return showErrors();
     }
     if (valid) {
          updateSuccessMessage(emailInput.value);
          switchSections();
     }
});

emailInput.addEventListener("input", () => {
     if (emailInput.classList.contains("error")) {
          emailInput.classList.remove("error");
          errorMss.classList.add("hide");
     }
});

dismiss.addEventListener("click", () => {
     switchSections();
     updateSuccessMessage("");
});

