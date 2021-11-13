const shortWord1 = (words) => {
  let minLenWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (minLenWord.length > words[i].length) {
      minLenWord = words[i];
    }
  }
  return minLenWord;
};

const shotwords2 = (sentence) => {
  const words = sentence.split(" ");
  const word = shortWord1(words);
  const shortWords = [];
  for (let i = 0; i < words.length; i++) {
    if (word.length === words[i].length) {
      shortWords.push(words[i]);
    }
  }
  return shortWords;
};

console.log(shotwords2("test1 the test12 eat test123V2 fly test123V1 man"));
