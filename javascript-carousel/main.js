
var images = ['./images/001.png', './images/004.png', './images/007.png', './images/025.png', './images/039.png'];

var image = document.querySelector('.image');

var buttonOne = document.querySelector('.cone');

var buttonTwo = document.querySelector('.ctwo');

var buttonThree = document.querySelector('.cthree');

var buttonFour = document.querySelector('.cfour');

var buttonFive = document.querySelector('.cfive');

var buttons = [buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive];

function updateCarousel(newIndex) {

  image.src = images[newIndex];
  for (var i = 0; i < buttons.length; i++) {
    if (i === newIndex) {
      buttons[i].className = 'fas fa-circle';
    } else {
      buttons[i].className = 'far fa-circle';
    }
  }

}

var index = 0;

var previousButton = document.querySelector('.fa-angle-left');
previousButton.addEventListener('click', function () {
  if (index === 0) {
    index = images.length - 1;
    image.src = images[index];
    updateCarousel(index);
  } else {
    index--;
    image.src = images[index];
    updateCarousel(index);
  }

});

var nextButton = document.querySelector('.fa-angle-right');
nextButton.addEventListener('click', function () {
  if (index < images.length - 1) {
    index++;
    image.src = images[index];
    updateCarousel(index);
  } else {
    index = 0;
    image.src = images[index];
    updateCarousel(index);
  }
});

setInterval(() => {

  index++;
  if (index === 5) {
    index = 0;
  }
  updateCarousel(index);
}, 3000);

var cirlesHolder = document.querySelector('.radio-button');
cirlesHolder.addEventListener('click', function () {
  for (var i = 0; i < buttons.length; i++) {
    if (event.target === buttons[i]) {
      updateCarousel(i);
    }
  }
});
