const fibonacci = (startNumber, endNumber) => {
  let a, b, c;
  const fibonacciNumbers = [];
  for (let i = startNumber; i <= endNumber; i++) {
    if (i === 1) {
      a = 1;
    } else if (i === 2) {
      b = 1;
    } else if (i == 3) {
      c = 1;
    } else {
      a = a + b + c;
      b = a - b - c;
      c = a - b - c;
    }
    fibonacciNumbers.push(a);
  }
  return fibonacciNumbers.join(", ");
};

console.log(fibonacci(1,10))