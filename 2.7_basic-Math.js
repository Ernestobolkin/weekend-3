function basicOp (operation,number1,number2){
  switch(operation) {
    case '+':
    console.log(number1 + number2);
      break;
    case '-':
      console.log(number1 - number2);
      break;
    case '*':
      console.log(number1 * number2);
      break;
    case '/':
      console.log(number1 / number2);
      break;
    default:
      return 'not valid operation';
  }
}

console.log(basicOp('+', 1, 7));         // Output: 8
console.log(basicOp('-', 15, 15));       // Output: 0
console.log(basicOp('*', 1, 5));        // Output: 5
console.log(basicOp('/', 49, 1));       // Output: 49 