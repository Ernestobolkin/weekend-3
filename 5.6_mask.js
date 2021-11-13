const maskify =(someting)=>{
  if(someting.length<4)
  {
    return someting
  }
  return "#".repeat(someting.length-4)+ someting.substring(someting.length-4);
}


console.log(maskify("4556364607935616"))
console.log(maskify("64607935616"))
console.log(maskify("1"))
console.log(maskify(""))
console.log(maskify("1234"))


// maskify("4556364607935616") == "############5616" 
// maskify("64607935616") ==      "#######5616" 
// maskify("1") ==                "1" 
// maskify("               ") ==                 "" 
// // "What was the name of your first pet?" 
// maskify("Skippy")                                   == "##ippy" 
// maskify("Nananananananananananananananana Batman!") == "####################################man!"