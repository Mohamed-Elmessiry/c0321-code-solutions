var images = [];
images[0] = './images/001.png';
images[1] = './images/004.png';
images[2] = './images/007.png';
images[3] = './images/025.png';
images[4] = './images/039.png';

var image = document.querySelector('.image');

var buttonOne = document.querySelector('.cone');
buttonOne.addEventListener('click', function (event) {
  image.src = images[0];
});

var buttonTwo = document.querySelector('.ctwo');
buttonTwo.addEventListener('click', function (event) {
  image.src = images[1];
});

var buttonThree = document.querySelector('.cthree');
buttonThree.addEventListener('click', function (event) {
  image.src = images[2];
});

var buttonFour = document.querySelector('.cfour');
buttonFour.addEventListener('click', function (event) {
  image.src = images[3];
});

var buttonFive = document.querySelector('.cfive');
buttonFive.addEventListener('click', function (event) {
  image.src = images[4];
});

var previousButton = document.querySelector('.fa-angle-left');
previousButton.addEventListener('click', function () {
  for (var i = 0; i < images.length; i++) {

    if (image.src === images[0]) {
      image.src = images[images.length - 1];
    } else {

      image.src = images[i - 1];
    }

  }
});
