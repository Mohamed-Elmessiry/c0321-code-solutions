function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('convertMinutesToSeconds(5):', convertMinutesToSeconds(5));

function greet(name) {
  return ('Hey,' + ' ' + name);
}

console.log('greet("Cody")', greet('Cody'));

function getArea(width, height) {
  return width * height;
}

console.log('getArea(10, 20):', getArea(10, 20));

var student = {
  firstName: 'Mohamed',
  lastName: 'Elmessiry'
};

function getFirstName(person) {
  return person.firstName;
}

console.log('getFirstName(student):', getFirstName(student));

var materials = ['cotton', 'silk', 'wool'];

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('getLastElement(materials):', getLastElement(materials));
