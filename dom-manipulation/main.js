var counter = 0;
var hot = document.querySelector('.hot-button');
var count = document.querySelector('.click-count');

hot.addEventListener('click', function (event) {
  counter++;
  count.textContent = counter;
  var tempreature;

  if (counter < 4) {
    tempreature = 'cold';
  } else if (counter < 7) {
    tempreature = 'cool';
  } else if (counter < 10) {
    tempreature = 'tepid';
  } else if (counter < 13) {
    tempreature = 'warm';
  } else if (counter < 16) {
    tempreature = 'hot';
  } else {
    tempreature = 'nuclear';
  }

  hot.className = 'hot-button' + ' ' + tempreature;

});
