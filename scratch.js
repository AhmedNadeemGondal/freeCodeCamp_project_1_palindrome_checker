const isPalindrome = (text) => {
  let ifTrue = true;
  if (text.length === 1) {
    return ifTrue;
  } else {
    for (let i = text.length; text.length > 1; i--) {
      console.log(`${i}, ${text.length}`);
      const lastElement = text.pop();
      const firstElement = text.shift();
      console.log(`${i}, ${text.length}, ${firstElement}, ${lastElement}`);
      if (firstElement !== lastElement) {
        ifTrue = false;
        break;
      }
    }
    return ifTrue;
  }
};

const cleanText = (text) => {
  const textLower = text.toLowerCase();
  const pattern = /[a-z]/g;
  const cleanedText = textLower.match(pattern);
  return cleanedText;
};

const output = isPalindrome(cleanText("AAAasaAAA"));
console.log(output);
