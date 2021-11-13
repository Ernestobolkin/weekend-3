function toCamelCase(string){
  const words = string.split(/[-_]/);
  console.log(words)
  for(let i =1; i<words.length ;i++){
    words[i]= words[i][0].toUpperCase()+words[i].substring(1);
    
  }return words.join("");
}



console.log(toCamelCase("the-stealth-warrior"))// returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")) // returns "TheStealthWarrior"






