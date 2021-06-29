// viết 1 hàm nhận vào 1 tham số là 1 số, kiểm tra tính chẵn lẻ của số đó ,nếu chẵn in chẵn, số lẻ in lẻ, số âm in âm , số dương in dương in dưong

function checkNumber(a) {
  if (a % 2 === 0) {
    console.log('số chẵn');
  } else if (a % 3 === 0) {
    console.log('số lẻ');
  } else if (a > 0) {
    console.log('số dương');
  } else if (a < 0) {
    console.log('số âm');
  }
}
checkNumber(2);

// viết 1 hàm nhận vào là 1 tham số, in ra kiểu dữ liệu của tham số vừa nhập

function style(a) {
    console.log(typeof a);
  }
  style(1);
  

// nhập tên hai người nếu tên giống nhau trả về true nếu không giống trả về fales

function names(a, b) {
    if (a === b) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  names('tuan', 'duy');
  

