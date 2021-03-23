var lightSwitchOn = false;

var containerSelector = document.querySelector('.container');
var circleSelector = document.querySelector('.circle');
circleSelector.addEventListener('click', function () {
  if (lightSwitchOn === false) {
    lightSwitchOn = true;
    containerSelector.className = 'containerOn';
    circleSelector.className = 'circleOn';

  } else if (lightSwitchOn === true) {
    lightSwitchOn = false;
    containerSelector.className = 'container';
    circleSelector.className = 'circle';
  }
});
