let fibonacci = (numStart,numEnd)=>{
  let a;
  let b;
  const fibonacciNum=[];
  for(let i = numStart ;i <=  numEnd;i++){
    if(i===1)
    {
      a=1
    }else if(i===2)
    {
      b=1
    }else{    
      a=a+b;
      b=a-b;}
    fibonacciNum.push(a);
  }return fibonacciNum;
}


console.log(fibonacci(1,144)) // 1, 1, 2, 3, 5, 8, 13, 21.