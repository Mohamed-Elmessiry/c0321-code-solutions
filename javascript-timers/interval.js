var heading = document.querySelector('h1');
var counter = 4;

function countdown() {
  heading.textContent = counter;
  if (counter === 4) {
    counter--;
  } else if (counter === 3) {
    counter--;
  } else if (counter === 2) {
    counter--;
  } else if (counter === 1) {
    counter--;
  } else {
    heading.textContent = '~Earth Beeeelooowww Us~';
  }

}

setInterval(countdown, 2000);
