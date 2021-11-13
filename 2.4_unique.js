const uniq1 = [ 1, 1, 1, 2, 1, 1 ]; // 2
const uniq2 = [0,0,1,0,0,0]; //1
const uniq3 = [ 0, 0, 0.55, 0, 0 ]; //0.55
const uniq4 = [ 1,1, 1, 0, 1 ]; //0

// const findUniq = (x) =>{
//   let num1 = x[0];
//   let num2 = x[1];
//   let num3 = x[2];
//   let uniq;
//   if (num1 === num2 && num1 !== num3 ) {
//     uniq = num3;
//     return num3
//   }else if(num1 === num3 && num2 !== num3){
//     uniq = num2;
//     return num2;
//   }else if(num2 === num3 && num1 !== num3 ){
//     uniq = num1;
//     return num1;
//   }else {
//     for(let i = 3; i < x.length; i++){
//       if(num1 !== x[i]) {
//         return x[i];
//       }
//     }
//   }
// };



//find uniq V.2

// arr.sort((a, b) => a - b);
//   return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];


function findUniq (arr){
  // arr.sort(function (a,b) {return  a - b})
  arr.sort((a, b) => a - b);
  if(arr[0]===arr[1]){
    return arr[arr.length-1];
  } return arr[0];
}





console.log(findUniq(uniq1));
console.log(findUniq(uniq2));
console.log(findUniq(uniq3));
console.log(findUniq(uniq4));

