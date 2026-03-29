
const form = document.getElementById("contactForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const successMsg = document.getElementById("formSuccess");

// Utility functions
function showError(input, message) {
  const field = input.parentElement;
  const error = field.querySelector(".error");

  error.textContent = message;
  input.classList.add("error-border");
  input.classList.remove("success-border");
}

function showSuccess(input) {
  const field = input.parentElement;
  const error = field.querySelector(".error");

  error.textContent = "";
  input.classList.remove("error-border");
  input.classList.add("success-border");
}

function validateEmail(emailValue) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
}

// Main validation
function validateForm() {
  let isValid = true;

  // First Name
  if (firstName.value.trim() === "") {
    showError(firstName, "First name is required");
    isValid = false;
  } else {
    showSuccess(firstName);
  }

  // Last Name
  if (lastName.value.trim() === "") {
    showError(lastName, "Last name is required");
    isValid = false;
  } else {
    showSuccess(lastName);
  }

  // Email
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else if (!validateEmail(email.value.trim())) {
    showError(email, "Enter a valid email");
    isValid = false;
  } else {
    showSuccess(email);
  }

  // Message
  if (message.value.trim() === "") {
    showError(message, "Message cannot be empty");
    isValid = false;
  } else if (message.value.trim().length < 10) {
    showError(message, "Message must be at least 10 characters");
    isValid = false;
  } else {
    showSuccess(message);
  }

  return isValid;
}

// Submit handler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  successMsg.textContent = "";

  if (validateForm()) {
    successMsg.textContent = "✅ Message sent successfully!";
    
    // Reset form
    form.reset();

    // Remove success borders after reset
    document.querySelectorAll("input, textarea").forEach(el => {
      el.classList.remove("success-border");
    });
  }
});

// Optional: real-time validation
[firstName, lastName, email, message].forEach(input => {
  input.addEventListener("input", () => {
    validateForm();
  });
});
