var victims = prompt ("How many disaster victims would you like to enter?") 
 
//* for loop

for (var i = victims; i > 0; i--) {
  if (victims > 0) {
    var name = prompt ("What is the victim's name?");
    var number = prompt("What is " + name + "'s number?");
    var street = prompt("What is " + name + "'s street?");
 } 
}

alert ([name(victims.length)+'\n'+number(victims.length)+'\n'+street(victims.length)]);


//* map method with for..of loop 
