// function firstReverse
function firstReverse(string){
  var arr = string.split("");
    arr.reverse();
  console.log(arr.join(""));
}

firstReverse("Duck duck dynasty.");


// function swapCase
function swapCase(string) {
  var arr =string.split("");
  var newString ="";
  for (var i in arr) {
    if ( arr[i] === arr[i].toUpperCase()){
      newString = newString + arr[i].toLowerCase();
    } else {
      newString = newString + arr[i].toUpperCase();
    }
  } console.log(newString);
}

swapCase("OhMerGawd")