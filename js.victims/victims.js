// 1. First we need to use a prompt to ask the user how many victims to enter.
// 2. Next, we need to ask for the victim's info: name, number, and street.
//    a. = store this info in 3 seperate arrays, one for each seperate piece of info, using the .push method.
// 3. Then we need to continue this loop for the number of victims entered.
// 4. We need to repeat all the above steps and include the data in a seperate array for volenteers.
// 5. At the end, print out  in a single alert, the number of victims, the number of volunteers, and a list of all victims and all volunteers.


var victims = prompt ("How many disaster victims do you wish to enter?");

var vicName =[];
var vicNumber=[];
var vicStreet=[];

for (var i = victims; i > 0; i--) {
  if (victims > 0) {
    vicName.push(prompt ("What is the victim's name?"));
    vicNumber.push(prompt("What is the victim's number?"));
    vicStreet.push(prompt("What is the victim's street?"));
  }}


var volunteers = prompt ("How many disaster volunteers do you wish to enter?");

var volName =[];
var volNumber=[];
var volStreet=[];

for (var i = volunteers; i > 0; i--) {
  if (volunteers > 0) {
    volName.push(prompt ("What is the volunteer's name?"));
    volNumber.push(prompt("What is the volunteer's number?"));
    volStreet.push(prompt("What is the volunteer's street?"));
  }}



alert ("There are " + victims + " victims and " + volunteers + " volunteers. The victims' names are " + vicName.join (", ") + ".\n The volunteers' names are " + volName.join (", ") + ".");





