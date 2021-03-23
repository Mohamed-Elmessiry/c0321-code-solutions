var lightSwitchOn = false;

var con = document.querySelector('.container');
var cir = document.querySelector('.circle');
cir.addEventListener('click', function () {
  if (lightSwitchOn === false) {
    lightSwitchOn = true;
    con.className = 'containerOn';
    cir.className = 'circleOn';

  } else if (lightSwitchOn === true) {
    lightSwitchOn = false;
    con.className = 'container';
    cir.className = 'circle';
  }
});
