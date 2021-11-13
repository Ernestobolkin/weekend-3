const summation = (n) => {
  let sum = 0;
  for(let i =1; i<=n;i++ ){
    sum +=i;
  }return sum
};
console.log(summation(2)); // 3
console.log(summation(8)); // 36
console.log(summation(1)); // 1
console.log(summation(4)); // 10