//triple-five 

for (var tripleFive = 0; tripleFive < 3; tripleFive++) {
  console.log ("Five!");
}

//lastLetter

var myString = "I love Girl Scout cookies";
var stringLength = myString.length;
var lastLetter = myString.charAt(stringLength - 1);

console.log ("The last letter in the string is " + lastLetter);

//square

function square (num) {
   return num * num;
}

console.log (square(3));

console.log (square(5));

//negate

function negate (num) {
   return num * -1;
}

console.log (negate(5));

console.log (negate(-8));

//toArray

function toArray (a,b,c) {
  return arguments;
}

console.log(toArray('dog','cat','bird'));

//startsWithA

function startsWithA (string) {
  if(string.startsWith("a")) {
    return true;
  } else {
    return false;
  }
}

console.log (startsWithA("aardvark"));
console.log (startsWithA("bear"));

//excite

function excite (string) {
  return string + "!!!";
}

console.log (excite('yes'));
console.log (excite('go'));

//sun

function sun (string) {
  if(string.includes("sun")) {
    return true;
  } else {
    return false;
  }
}

console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));

//tiny

function tiny (number) {
  if(number <= 1 && number >= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));

//getSeconds

function getSeconds (time) { 
  var split = time.split (':');
  var sec = split[0]*60 + split[1] * 1;
  return (sec);
}

console.log (getSeconds ('01:30'));
console.log (getSeconds ('10:25'));