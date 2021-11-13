const abbreviate = (fullName) =>{
const abbArray = fullName.split(" ")
return (abbArray[0][0]+'.'+abbArray[1][0]).toUpperCase()
}



console.log(abbreviate('ernest tobolkin')) //E.T
console.log(abbreviate('Patrick Feeney')) //P.F
console.log(abbreviate('sam harris'))//S.H




// const abbreviate= (firstName,lastName)=>{
//   let abbname = firstName.charAt(0).toUpperCase();
//   let abblastname = lastName.charAt(0).toUpperCase();
//   return `${abbname}.${abblastname}`
// }


// console.log(abbreviate('test','last'))

