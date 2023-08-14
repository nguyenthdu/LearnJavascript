//một hàm chấp nhận một hàm và/hoặc trả về một hàm được gọi là hàm bậc cao hơn và chúng rất phổ biến trong JavaScript.


function log(inputFunction) {
    return function(...args) {
       console.log("Input", args);
       const result = inputFunction(...args);
       console.log("Output", result);
       return result;
    }
  }
  const f = log((a, b) => a + b);
  f(1, 2); // Logs: Input [1, 2] Output 3