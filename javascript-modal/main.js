
var mHolder = document.querySelector('.modal-holder');
var holdingContainer = document.querySelector('.container');
var modalDiv = document.querySelector('.modal-none');
var modalButton = document.querySelector('.modal-button');
modalButton.addEventListener('click', function () {
  modalDiv.className = 'modal-active';
  holdingContainer.className = 'container-pressed';
  mHolder.className = 'modal-holder-active';
});

var noButton = document.querySelector('.no-button');
noButton.addEventListener('click', function () {
  modalDiv.className = 'modal-none';
  holdingContainer.className = 'container';
  mHolder.className = 'modal-none';
});
