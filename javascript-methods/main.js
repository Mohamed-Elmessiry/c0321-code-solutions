var nOne = 10;
var nTwo = 20;
var nThree = 30;
var maximumValue = Math.max(nOne, nTwo, nThree);
console.log('value of maximumValue:', maximumValue);
var heroes = ['Batman', 'Superman', 'Spiderman', 'Captain America'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);
var library = [
  {
    title: 'The Secret',
    author: 'Rohnde Byrne'
  },
  {
    title: 'oliver twist',
    author: 'charles dickens'
  },
  {
    title: 'romeo and juliet',
    author: 'william sheakspeare'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of libary:', library);

var fullName = 'Mohamed Elmessiry';
var firstAndLastName = fullName.split(' ');
console.log('vale of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
