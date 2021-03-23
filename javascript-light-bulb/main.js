var lightSwithch = false;

var con = document.querySelector('.container');
var cir = document.querySelector('.circle');
cir.addEventListener('click', function () {
  if (lightSwithch === false) {
    lightSwithch = true;
    con.className = 'containerOn';
    cir.className = 'circleOn';

  } else if (lightSwithch === true) {
    lightSwithch = false;
    con.className = 'container';
    cir.className = 'circle';
  }
});
