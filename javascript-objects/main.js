var student = {
  firstName: 'Mohamed',
  lastName: 'Elmessiry',
  age: 34
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName :', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Financial Analyst';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Mercedes',
  model: 'Gullwing',
  year: 1957
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('vehicle["isConvertible"]', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'buster',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
