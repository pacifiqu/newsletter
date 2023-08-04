// Form submission handling
const form = document.getElementById('signup-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const emailErrorMsg = document.getElementById('email-error-msg');

  // Validate email format
  if (!validateEmail(emailInput.value)) {
    emailErrorMsg.textContent = 'Please enter a valid email address';
    return;
  }

  // Display success message
  const successMessage = document.getElementById('success-message');
  const confirmationEmail = document.getElementById('confirmation-email');
  confirmationEmail.textContent = `A confirmation email has been sent to ${emailInput.value}.`;
  successMessage.style.display = 'block';

}

// Function to validate email format
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Dismiss success message
function dismissSuccessMessage() {
  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'none';
}
