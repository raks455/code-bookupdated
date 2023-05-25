
const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const btnpopup =  document.getElementById('btn-popup');


signupLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginContainer.style.display = 'none';
  signupContainer.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginContainer.style.display = 'block';
  signupContainer.style.display = 'none';
});


