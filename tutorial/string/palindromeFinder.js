let string1 = "racecar";
let string2 = "radar";
let string3 = "beautiful";
let string4 = "cook";

function palindrome(word){ 
  let backwardWord = "";
  for (letter of word){
    // Adding letter at the beginning of the backward string
    backwardWord = letter + backwardWord;
}
  if (word.toLowerCase() === backwardWord.toLowerCase())
    console.log(true);
  else
    console.log(false);
 
}
palindrome(string1);
palindrome(string2);
palindrome(string3);
palindrome(string4);