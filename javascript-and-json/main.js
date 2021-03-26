var books = [{
  isbn: '10000',
  title: 'romeo never dies',
  author: 'william sheakspeare'
}, {
  isbn: '10001',
  title: 'globe trotter europe',
  author: 'rick steve'
}, {
  isbn: '10002',
  title: 'oliver twist',
  author: 'charles dickens'
}];

console.log('Array of books:', books);
console.log('type of books:', typeof books);

var booksStrignified = JSON.stringify(books);
console.log('value of booksStrignified:', booksStrignified);
console.log('type of booksStrignified', typeof booksStrignified);

var studentsString = '{ "id": 1000, "name": "Aly" }';
console.log('value of studentsString', studentsString);
console.log('type of studentString', typeof studentsString);

var studentsStringParsed = JSON.parse(studentsString);
console.log('value of studentsStringParsed', studentsStringParsed);
console.log('type of studentsStringParsed', studentsStringParsed);
