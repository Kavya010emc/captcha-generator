
// Selecting DOM elements
const captchaBox = document.querySelector("#captcha");
const refreshButton = document.querySelector("#refresh");
const captchaInput = document.querySelector("#captchaInput");
const submitButton = document.querySelector("#submit");
const message = document.querySelector("#message");

let captchaText = "";

// Function to generate captcha
const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7);
  captchaText = randomString
    .split("")
    .map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char))
    .join("");
  captchaBox.value = captchaText;
};

// Refresh button click event
const refreshCaptcha = () => {
  generateCaptcha();
  captchaInput.value = "";
  validateInput();
};

// Validate captcha input
const validateInput = () => {
  submitButton.classList.toggle("disabled", !captchaInput.value.trim());
  message.textContent = "";
};

// Submit button click event
const verifyCaptcha = () => {
  if (submitButton.classList.contains("disabled")) return;

  const userInput = captchaInput.value.trim();
  if (userInput.toLowerCase() === captchaText.toLowerCase()) {
    message.textContent = "Captcha verification successful!";
    message.style.color = "#4CAF50"; // Green
  } else {
    message.textContent = "Captcha verification failed. Try again.";
    message.style.color = "#FF2525"; // Red
  }
};

// Event listeners
refreshButton.addEventListener("click", refreshCaptcha);
captchaInput.addEventListener("keyup", validateInput);
submitButton.addEventListener("click", verifyCaptcha);

// Generate captcha on page load
generateCaptcha();