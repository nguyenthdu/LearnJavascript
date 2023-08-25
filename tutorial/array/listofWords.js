var inputs = ['NewYork', 'Sleeping', 'Paris', 'Working'];
var words = {
  list : [],
  addWord(word){
    if(!word.endsWith("ing"))
      this.list.push(word);
  }
};
for(input of inputs){
  words.addWord(input);
}

///===========
var inputs = ['Cookies', 'Cool', 'Coconut', 'Cook'];
var words = {
  list : [],
  addWord(word){
    if(!word.startsWith("Coc"))
      this.list.push(word);
      console.log(this.list);
  }
};
for(input of inputs){
  words.addWord(input);
}