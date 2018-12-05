/*You need to create a program that will take an array of two numbers who are not necessarily in order, 
and then add not just those numbers but any numbers in between. For example, [3,1] will be the same as 1+2+3 and not just 3+1*/

function sumAll(arr) {
  
  let zero = 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  for (let i=min; i<= max;i++){
    zero = zero + i;
  } 
  return zero;
}
sumAll([1, 4]);

function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);

function sumAll(arr) {
  // Buckle up everything to one!

  // Using ES6 arrow function (one-liner)
  var sortedArr = arr.sort((a,b) => a-b);
  var firstNum = arr[0];
  var lastNum = arr[1];
  // Using Arithmetic Progression summing formula

  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}

//output 10
