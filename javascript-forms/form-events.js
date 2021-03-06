function handleFocus(event) {
  console.log('focus event was fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var nameInput = document.getElementById('user-name');
var emailInput = document.getElementById('user-email');
var textArea = document.getElementById('user-message');

nameInput.addEventListener('focus', handleFocus);
nameInput.addEventListener('blur', handleBlur);
nameInput.addEventListener('input', handleInput);
emailInput.addEventListener('focus', handleFocus);
emailInput.addEventListener('blur', handleBlur);
emailInput.addEventListener('input', handleInput);
textArea.addEventListener('focus', handleFocus);
textArea.addEventListener('blur', blur);
textArea.addEventListener('input', handleInput);
