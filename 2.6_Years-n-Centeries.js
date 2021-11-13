function centuryFromYear(year){
  return Math.ceil(year/100);
}


console.log(centuryFromYear(1705))  //returns (18) 
console.log(centuryFromYear(1900)) //returns (19) 
console.log(centuryFromYear(1601))  //returns (17) 
console.log(centuryFromYear(2000))  //returns (20)