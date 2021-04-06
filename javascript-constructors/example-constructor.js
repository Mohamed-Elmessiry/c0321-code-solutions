function ExampleConstructor() {
  console.log('value of prototype property of ExampleConstructor', ExampleConstructor.prototype);
  console.log('value of type fo property of ExampleConstructor', typeof ExampleConstructor.prototype);
}

var newExampleConstructor = new ExampleConstructor();
console.log('value of newExampleConstructor', newExampleConstructor);

console.log(newExampleConstructor instanceof ExampleConstructor);
