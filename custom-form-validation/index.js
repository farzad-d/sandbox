const form = document.querySelector("form");

const email = document.getElementById("email");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const inputs = [email, country, postalCode, password, confirmPassword];

messages = {
  email: "I am expecting an email address!",
  country: "I am expecting a country!",
  password: "I am expecting a password!",
  "postal-code": "I am expecting a postal code!",
  "confirm-password": "I am expecting password confirmation!",
  passwordsMismatch: "The passwords do not match",
  shortPostalCode: "Postal code must be more than 3 digits",
  shortCountryName: "Country name must be at least 2 letters",
  wrongEmailAddress: "It's not an email!",
};

function getPasswordErrorMessage() {
  if (password.value.length < 6) {
    return "Password must be at least 6 characters long";
  }
  if (!/[a-z]/.test(password.value)) {
    return "Password must include at least one lowercase letter";
  }
  if (!/[A-Z]/.test(password.value)) {
    return "Password must include at least one uppercase letter";
  }
  if (!/\d/.test(password.value)) {
    return "Password must include at least one digit";
  }
  return "";
}

function fail(input, message) {
  input.setCustomValidity(message);
  input.reportValidity();
  console.warn("Submission failed.");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (const input of inputs) {
    if (!input.value.trim()) {
      fail(input, messages[input.id]);
      return;
    }
    input.setCustomValidity("");
  }

  if (email.validity.typeMismatch) {
    fail(email, messages.wrongEmailAddress);
    return;
  }

  if (country.value.trim() && country.value.length < 2) {
    fail(country, messages.shortCountryName);
    return;
  }

  if (postalCode.value.trim() && postalCode.value.length <= 3) {
    fail(postalCode, messages.postalCode);
    return;
  }

  if (getPasswordErrorMessage()) {
    fail(password, getPasswordErrorMessage());
    return;
  }

  if (password.value !== confirmPassword.value) {
    fail(confirmPassword, messages.passwordsMismatch);
    return;
  }

  console.log("Form submitted successfully!");
});

postalCode.addEventListener("blur", () => {
  if (postalCode.value.trim() && postalCode.value.length <= 3) {
    postalCode.setCustomValidity(messages.shortPostalCode);
    postalCode.reportValidity();
    return;
  }
});

password.addEventListener("blur", () => {
  if (getPasswordErrorMessage()) {
    password.setCustomValidity(getPasswordErrorMessage());
    password.reportValidity();
    return;
  }
});

country.addEventListener("blur", () => {
  if (country.value.trim() && country.value.length < 2) {
    country.setCustomValidity(messages.shortCountryName);
    country.reportValidity();
    return;
  }
});

for (const input of inputs)
  input.addEventListener("input", () => input.setCustomValidity(""));
