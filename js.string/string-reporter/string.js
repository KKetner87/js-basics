
var word = window.prompt("Enter any word longer than 4 letters:", "Dongle");{
  if (word !== null) {
  alert ("You have entered "+ word + ".\nThere are " + word.length +" letters in this word.\nLowercase: " + word.toLocaleLowerCase() +  "\nUppercase: " + word.toLocaleUpperCase() + "\nExample: I've had it with these " + word + " on this "+ word + " plane! \nSubword: " + word.substring(1,3));
  }
}
