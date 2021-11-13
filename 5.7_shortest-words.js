const shortWords = (sentence) => {
  let words = sentence.split(" ");
  let minLenWord = words[0];
  for (let i =1; i < words.length; i++) {
    if (minLenWord > words[i]) {
      minLenWord = words[i];
    }
  }
  return minLenWord.length;
};

console.log(shortWords("test a aaa aa aaaa test"));
