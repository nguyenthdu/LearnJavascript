let input1 = [3, 11, 7, 2, 9, 10];
let input2 = [-1, 110, 1, 1, 0];

function sumArray(values){ 	
    let sum = 0;
  	for (value of values){
    		sum += value;
    	}
 		console.log(sum);
}
sumArray(input1);
sumArray(input2);