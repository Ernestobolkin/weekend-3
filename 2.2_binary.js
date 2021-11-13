const num5 = [0, 1, 0, 1]; // 5
const num4 = [0, 1, 0, 0]; // 4
const num15 = [1, 1, 1, 1];// 15

const num =[1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1]

function binarToDec (x){
  let sum = 0;
  //rev is reversing the array for the binary math and creates new array wit concat!
  const rev = x.concat().reverse();
  for(let i =0; i<rev.length; i++ ){
    if(rev[i] === 1 ){
      sum += 2**i;
    }
  } return sum;
}


console.log(binarToDec( num5))
console.log(binarToDec( num4))
console.log(binarToDec( num15))
console.log(binarToDec( num))
