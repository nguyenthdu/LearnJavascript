let input1 = [11,3,7,2,9,10];
let input2 = [-2,-11,-100,3];

function secondMinimum(values){
  min = Number.MAX_SAFE_INTEGER;
  sndMin = Number.MAX_SAFE_INTEGER;
  for (value of values) {
    if (value != min) {
      if(value < min) {
        sndMin = min;
        min = value;
      }
      else if (value < sndMin){
        sndMin = value;
      }
    }
  }
  console.log(sndMin);
}
secondMinimum(input1);
secondMinimum(input2);