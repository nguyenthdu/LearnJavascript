let word = "Strong";
function reverse(word){
  	var reverseWord ="";	
  	for(var i = word.length - 1; i >= 0; i--){
    		reverseWord += word[i];
    }
  	return reverseWord;
}
console.log(reverse(word));