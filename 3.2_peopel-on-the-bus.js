const theBus = (arr)=>{
  sum = 0;
  arr.forEach(station => {
    sum += (station[0]-station[1])
  }); 
  return sum;
}

console.log(
  theBus([
    [1, 0],
    [3, 1],
  ])
); // Output: 3
console.log(
  theBus([
    [3, 0],
    [0, 3],
    [1, 1],
  ])
); // Output: 0
console.log(
  theBus([
    [3, 0],
    [0, 3],
    [1, 0],
  ])
); // Output: 1
console.log(
  theBus([
    [5, 0],
    [0, 2],
    [1, 0],
  ])
); // Output: 4


//left, people that gets ON the bus
//right, is the people that get OF the bus