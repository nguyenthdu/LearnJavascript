//JavaScript có một tính năng gọi là cẩu trong đó một chức năng đôi khi có thể được sử dụng trước khi nó được khởi tạo. Bạn chỉ có thể làm điều này nếu bạn khai báo các hàm theo functioncú pháp.

function createFunction() {
    return f;
    function f(a, b) {
      const sum = a + b;
      return sum;
    }
  }
  const f = createFunction();
  console.log(f(3, 4)); // 7