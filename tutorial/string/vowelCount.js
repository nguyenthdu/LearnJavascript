let word = "This is a string"; 
function vowels (word){
  	var count = 0;
    for (w of word){
    		if(w == 'a' || w == 'e' || w == 'i' || w == 'o' || w == 'u'){
        		count++;
        	}
    	}
  return count;
}
console.log(vowels(word));