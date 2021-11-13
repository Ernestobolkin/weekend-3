const nb_year = (p0,percent,aug,p)=>{
  percent=(percent/100)+1 ;
  let yearCounter =0;
  while(p0<p){
    p0=p0*percent+aug;
    yearCounter++;
  }return yearCounter;
}


console.log(nb_year(1500, 5, 100, 5000)); // Output: 15
console.log(nb_year(1500000, 2.5, 10000, 2000000)); // Output: 10


// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer) -- At the end of the 2nd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213 -At the end of the 3rd year there will be:

// p0-is the start of the population
// p-is the population that you want to get
// percent- is the prasentage per year of growth of the population
// aug- population that adds every year to the town