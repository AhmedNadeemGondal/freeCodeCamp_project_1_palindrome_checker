const checkButton = document.getElementById("check-btn");

const checkValidInput = () => {
  const textInputObj = document.getElementById("text-input");
  const textInputValue = textInputObj.value;
  textInputObj.value = "";
  // console.log(textToCheck);
  if (textInputValue === "") {
    alert("Please input a value");
  }
  const cleanedText = cleanText(textInputValue);
  console.log(cleanedText);
  const palinOut = isPalindrome(cleanedText);
  console.log(palinOut);

  const result = document.getElementById("result");
  result.innerText = palinOut ? `${textInputValue} is a palindrome`:`${textInputValue} is not a palindrome`
};

const cleanText = (text) => {
  const textLower = text.toLowerCase();
  const pattern = /[a-z0-9]/g;
  const cleanedText = textLower.match(pattern);
  return cleanedText;
};

const isPalindrome = (text) => {
  let ifTrue = true;
  if (text.length === 1) {
    return ifTrue;
  } else {
    for (let i = text.length; text.length > 1; i--) {
      // console.log(`${i}, ${text.length}`);
      const lastElement = text.pop();
      const firstElement = text.shift();
      // console.log(`${i}, ${text.length}, ${firstElement}, ${lastElement}`);
      if (firstElement !== lastElement) {
        ifTrue = false;
        break;
      }
    }
    return ifTrue;
  }
};

checkButton.addEventListener("click", checkValidInput);
