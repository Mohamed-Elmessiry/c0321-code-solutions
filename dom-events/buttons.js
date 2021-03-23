function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var clickButton = document.querySelector('.click-button');
clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var hover = document.querySelector('.hover-button');
hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var dbClick = document.querySelector('.double-click-button');
dbClick.addEventListener('dblclick', handleDoubleClick);
