var tabContainer = document.querySelector('.tab-container');
var tabElements = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');
tabContainer.addEventListener('click', swap);
function swap(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabElements.length; i++) {
      if (tabElements[i] === event.target) {
        tabElements[i].className = 'tab active';
      } else {
        tabElements[i].className = 'tab';
      }

    }
    var attr = event.target.getAttribute('data-view');
    for (var k = 0; k < views.length; k++) {
      if (views[k].getAttribute('data-view') !== attr) {
        views[k].className = 'view hidden';
      } else {
        views[k].className = 'view';
      }
    }
  }

}
