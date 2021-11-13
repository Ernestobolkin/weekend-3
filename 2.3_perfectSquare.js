const findNextSquare = (x) => { 
  let root = Math.sqrt(x);
  if(Number.isInteger(root)){
    return Math.pow((root + 1),2);
  } return -1;
}


console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(114)); // -1