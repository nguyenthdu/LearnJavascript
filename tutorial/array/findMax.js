let input1 = [3, 11, 7, 2, 9, 10];
let input2 = [-1,-2,-100,3];

function maxElement(values){
  	var max = values[0];
  	for (value of values){
    		if(value > max) max = value;
    	}
 		console.log(max);
}
maxElement(input1);
maxElement(input2);