const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link"),
  startt = document.getElementById("start0");

//   js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// js code to appear signup and login form
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});



// Get the form element
// Get the login and signup links

const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.signup-link');

// Add click event listener to login link
loginLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default behavior
});

// Add click event listener to signup link
signupLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default behavior

});


// password and Email validation 

// Log In //

const loginForm = document.querySelector('.login form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the values of the email and password inputs
  const emailInput = loginForm.querySelector('.email');
  const passwordInput = loginForm.querySelector('.password');
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Perform input validation
  if (email === '') {
    alert('Please enter an email address.');
    emailInput.focus();
    return;
  }

  if (password === '') {
    alert('Please enter a password.');
    passwordInput.focus();
    return;
  }

  // Perform authentication with server here
  // ...

  // Assuming authentication is successful, redirect the user to another page
  window.open('details.html');
});

// Sign Up //

const signupForm = document.querySelector('.signup form');

signupForm.addEventListener('submit', (event) => {
  const nameInput = signupForm.querySelector('#enterYourName');
  const emailInput = signupForm.querySelector('.email');
  const passwordInput = signupForm.querySelector('.password');
  const confirmPasswordInput = signupForm.querySelector('.cPassword');
  const termsCheckbox = signupForm.querySelector('#termCon');
  const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

//   if (!nameInput.checkValidity()) {
//     alert('Please enter your name.');
//     event.preventDefault();
//   } else if (!emailInput.checkValidity()) {
//     alert('Please enter a valid email address.');
//     event.preventDefault(); }

   if (!passwordPattern.test(passwordInput.value)) {
    alert('Please enter a password that contains at least 8 characters, including a number, a symbol, a lowercase letter, and an uppercase letter.');
    event.preventDefault();
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match.');
    event.preventDefault();
  } else if (!termsCheckbox.checked) {
    alert('Please accept the terms and conditions.');
    event.preventDefault();
  }
    else if (nameInput !== '' && emailInput !== '' && passwordInput !== '') {
    window.open('details.html');
     }
     else {
    // Show an error message
    alert('Please fill in all fields.');
  }
});
