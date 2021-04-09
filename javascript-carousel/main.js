var images = [];
images[0] = '/Users/osamaelmessiry/repos/c0321-code-solutions/javascript-carousel/images/001.png';
images[1] = '/Users/osamaelmessiry/repos/c0321-code-solutions/javascript-carousel/images/004.png';
images[2] = '/Users/osamaelmessiry/repos/c0321-code-solutions/javascript-carousel/images/007.png';
images[3] = '/Users/osamaelmessiry/repos/c0321-code-solutions/javascript-carousel/images/025.png';
images[4] = '/Users/osamaelmessiry/repos/c0321-code-solutions/javascript-carousel/images/039.png';

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

var index = 5;

var previousButton = document.querySelector('.fa-angle-left');
previousButton.addEventListener('click', function () {
  if (index === 0) {
    image.src = images[4];
  } else {
    index--;
    image.src = images[index];
  }

});
