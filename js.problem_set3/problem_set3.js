// function palindrone

var palindrome = function(string) {
  if (string == string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

palindrome("noon");

palindrome("egg");

// function dashInsert
//  Write a function dashInsert that takes a single num parameter and returns the num with inserted dashes ('-') 
// between adjacent odd digits. For example: if num is 454793 the output should be "4547-9-3"



var dashInsert = function(string) {
  var str = '';
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) % 2 !==  0 && i > 0) {
      if(string.charAt(i-1)% 2 !== 0) {
        str= str + "-" + string.charAt(i);
      } else {
         str= str + string.charAt(i);
      }
  
    } else {
      str = str + (string.charAt(i));
    }
  }
  return str;
}

dashInsert("454793");

dashInsert("7235419");