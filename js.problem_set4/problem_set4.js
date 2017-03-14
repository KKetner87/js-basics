//Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string,
// adds them together, then returns the sum. For example: if str is "88Hello 3World!" the output should be 91. You will 
// have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" 
// and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 
// Warning: Regex is not allowed for this exercise!



//failed attempt//

// function addNumbers(string) {
  
//   var Numbers =[];
  
  
//   for (var i = 0; i < string.length; i++) {
//     for (var a = 0; a < string.length; a++) {
//       if (typeof i === 'number' && typeof(i + 1) === 'number') {
//         firstNum = parseInt(i + (i + 1));
//       }
//       if (typeof a === 'number') {
//         secondNum = parseInt(a);
//       }
//     }
//     return(firstNum + secondNum);
// } 
// }


function number(num){
 // return !isNaN(parseFloat(num)) && isFinite(num);

 if (typeof (parseInt(num)) === 'number' && isNaN(parseInt(num)) === false && isFinite(parseInt(num)) === true){
   return num
 }
}

function addNumbers(string){

var numbers = []

 for (var i = 0; i < string.length; i++){

   if(number(string[i]) == string[i]){
     numbers.push(string[i])

     var x = i+1;

     while(string[x] == number(string[x])&& x <= string.length){
       numbers[numbers.length-1] += string[x];
       // console.log(numbers)
       x++;
     }
     i = x;
     // numbers.push(string[i])
   }

 }for (var a = 0 ; a < numbers.length ; a ++){
   return numbers
         .map(function(str) { return parseInt(str); })
         .reduce(function(x,y) {return x+y});

   }
}

console.log(addNumbers("88Hello 3World"));
console.log(addNumbers("55He55l8l5o"));
console.log(addNumbers("5Hello 5"));






// Write a function longestWord that takes a single string parameter and returns the largest word in the string. 
// If there are two or more words that are the same length, it returns the first word from the string with that length.
// Ignore punctuation and assume the input sentence will not be empty.
var long =[];

function longestWord (string) {

  for (var i = 0; i < string.length; i++) {
    if(string[i].length > string[i+1].length){
     long.push(string[i]);
    } else {
    long.push(string[i+1]);  
  } 
  }   
}

console.log(long['Hello my friend']);










//**Bonus**//

//     Write a function averageStringNumbers that takes a single string parameter and searches for all the numbers in the string,
//     adds them together, then returns that final number divided by the total amount of letters in the string. For example: if 
//     str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you 
//     get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest 
//     whole number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole string 
//     (So this won't ever be the case: hello44444 world). Each string will also have at least one letter.