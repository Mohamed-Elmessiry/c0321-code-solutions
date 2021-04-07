var heading = document.querySelector('h1');
var counter = 4;

function countdown() {
  heading.textContent = counter;
  if (counter > 0) {
    counter--;
  } else {
    heading.textContent = '~Earth Beeeelooowww Us~';
  }

}

setInterval(countdown, 2000);
