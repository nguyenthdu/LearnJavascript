class Dog{
  constructor(name,species,size){
  		this.name = name;
    	this.species = species;
    	this.size = size;
  	}
  bark(){
	  if(this.size > 60)
	  {	
		console.log(this.name + " is a " + this.species + " dog measuring " + this.size) //Fang is a boarhound dog measuring 75
		console.log(this.name + " barks: Grrr! Grrr!"); //Fang barks: Grrr! Grrr!
	  } 
	  else
	  {
	    console.log(this.name + " is a " + this.species + " dog measuring " + this.size) //Snowy is a terrier dog measuring 22
	  	console.log(this.name + " barks: Woof! Woof!"); //Snowy barks: Woof! Woof!
	  }
  	}
}
let object = new Dog("Fang","boarhound", 75);
object.bark();

let object1 = new Dog("Snowy","terrier", 22);
object1.bark();