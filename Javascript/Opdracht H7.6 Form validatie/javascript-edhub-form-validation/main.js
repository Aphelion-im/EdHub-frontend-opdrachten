'use strict';

window.addEventListener('load', () => {
  console.log('Connected');

  // Variables
  const userNameField = document.querySelector('#username');
  const passWordField = document.querySelector('#password');
  const usernameMessage = document.querySelector('.username-message');
  const passwordMessage = document.querySelector('.password-message');

  // Functions
  function checkForMonkeyTail() {
    if (userNameField.value.includes('@', 0)) {
      usernameMessage.classList.add('visible');
    } else {
      usernameMessage.classList.remove('visible');
    }
  }

  function checkPAsswordLength() {
    if (passWordField.value.length > 0 && passWordField.value.length < 6) {
      passwordMessage.classList.add('visible');
    } else {
      passwordMessage.classList.remove('visible');
    }
  }

  // Event listeners
  userNameField.addEventListener('input', checkForMonkeyTail);
  passWordField.addEventListener('input', checkPAsswordLength);
}); // End load event listener
