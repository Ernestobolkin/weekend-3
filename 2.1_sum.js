const num = [19, 5, 42, 2, 77];//7
const num1 = [0.5, 1, 21, 2,]; //1.5

function smallnum (x){
  const sortnum = x.sort((a,b)=>a-b);
  const sum = sortnum[0]+sortnum[1];
  return sum;
}

console.log(smallnum(num))