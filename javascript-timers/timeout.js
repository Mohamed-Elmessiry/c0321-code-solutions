var heading = document.querySelector('h1');

function switchText() {
  heading.textContent = 'Hello There';
}

setTimeout(switchText, 2000);
