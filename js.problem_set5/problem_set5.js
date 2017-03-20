// Write a function alphabetSoup that takes a single string parameter and returns the string with the letters in alphabetical order
// (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.


function alphabetSoup(string) {

  var arr = string.split("");


  for (var i = 0; i < string.length; i++) {

  }
  return arr.sort([i]);
}

console.log(alphabetSoup('monday'));
console.log(alphabetSoup('marathon'));
console.log(alphabetSoup('weekend warrior'));






// Write a function vowelCount that takes a single string parameter and returns the number of vowels the string contains 
// (ie. "All cows eat grass" would return 5).


function vowelCount(string) {

  var vowelArray = string.match(/[aeiou]/gi);
  return vowelArray === null ? 0 : vowelArray.length;
}

console.log(vowelCount('All cows eat grass'));
console.log(vowelCount('All dogs like squirrels'));



// function getVowels(str) {
//   var m = str.match(/[aeiou]/gi);
//   return m === null ? 0 : m.length;
// }