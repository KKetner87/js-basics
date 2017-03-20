// // Write a function secondGreatLow that takes a single array of numbers and returns the second lowest and second greatest numbers, respectively,
// separated by a space. For example: if the array contains [7, 7, 12, 98, 106] the output should be "12 98". The array will not be empty and will
// contain at least 2 numbers. It can get tricky if there's just two numbers!

function secondGreatLow(array) {

  var duplicateArr = [];

  array.sort(function(a, b) {
    return b - a
  });

  for (var i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      array.splice(i, 1)
      console.log(array);
      i = 0
    }
  }
  return array[1] + ' ' + array[array.length - 2];
}


console.log(secondGreatLow([7, 7, 7, 12, 98, 106]));
console.log(secondGreatLow([8, 9, 33, 33, 105, 129]));





// Write a function timeConvert that takes a number parameter and returns the number of hours and minutes the parameter converts to (ie.
// if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

function timeConvert(num) {

  var hours = 0;
  var min =0;
  
  for (var i = 0; i < num; i ++) {
    if (num > 60) {
      hours += 1;
      num -= 60 ;
    } else {
     min = num;
    }
  }
    return hours +':'+ min;
} 
    
    
    
console.log(timeConvert('108'));
console.log(timeConvert('255'));







