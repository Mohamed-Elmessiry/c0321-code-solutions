let count = 3;

var decrease = setInterval(decrement, 1000);

function decrement() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(decrease);
  }
}
