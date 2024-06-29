const contactName = document.getElementById("contact-name");
const nameError = document.getElementById("name-error");
const contactPhone = document.getElementById("contact-phone");
const phoneError = document.getElementById("phone-error");
const contactEmail = document.getElementById("contact-email");
const emailError = document.getElementById("email-error");
const contactMessage = document.getElementById("contact-message");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
  // put .value to convert string to value
  if (contactName.value.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  } else if (!contactName.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write Full Name";
    return false;
  } else {
    nameError.innerHTML = "Valid";
    nameError.style.color = "green";
    return true;
  }
}

function validatePhone() {
  if (contactPhone.value.length === 0) {
    phoneError.innerHTML = "Phone is required";
    return false;
  } else if (contactPhone.value.length !== 10) {
    phoneError.innerHTML = "Phone Number should be 10 digits";
    return false;
  } else if (!contactPhone.value.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Digit Only";
    return false;
  } else {
    phoneError.innerHTML = "Valid";
    phoneError.style.color = "green";
    return true;
  }
}

function validateEmail() {
  if (contactEmail.value.length === 0) {
    emailError.innerHTML = "Email is required";
  } else if (
    !contactEmail.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Invalid Email Structure";
    return false;
  } else {
    emailError.innerHTML = "Valid";
    emailError.style.color = "green";
    return true;
  }
}

function validateMessage() {
  let requiredLength = 30;
  let leftWords = requiredLength - contactMessage.value.length;
  if (leftWords > 0) {
    messageError.innerHTML = leftWords + " words left";
    return false;
  } else {
    messageError.innerHTML = "Valid";
    messageError.style.color = "green";
    return true;
  }
}

function validateForm() {
  if (
    validateName() ||
    validateEmail() ||
    validatePhone() ||
    validateMessage() === false
  ) {
    submitError.style.display = "block"; // display will be visible
    submitError.innerHTML = "Please fix the error to submit";

    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
