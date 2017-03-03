// OLD SYNTAX

// function cereal (name, mascot, flavor, servings) {
//   this.name = name;
//   this.mascot = mascot;
//   this.flavor = flavor;
//   this.servings =servings;
// }



// var luckyCharms = new cereal ("lucky charms", "leprachan", "marshmellow", "6");


// var frostedFlakes = new cereal ("frosted flakes", "tiger", "frosting", "8");


// cereal.prototype.eatCereal = function(){

//            this.serving --;
//            return this.servings;

// }




// NEW SYNTAX - ES6 - Easier to read for developers coming from other languages

// class Cereal {
//   constructor (name, mascot, flavor, servings) {
//   this.name = name;
//   this.mascot = mascot;
//   this.flavor = flavor;
//   this.servings =servings;
//    }

//   eatCereal(){
//     this.servings --;
//     return this.servings;
//   }

// }


// var luckyCharms = new cereal ("lucky charms", "leprachan", "marshmellow", "6");


// var frostedFlakes = new cereal ("frosted flakes", "tiger", "frosting", "8");




// Create a Wizard Class and Instance with the new syntax

class Wizard {
  constructor(wizardInfo) {
    this.name = wizardInfo.name;
    this.beardLength = wizardInfo.beardLength;
    this.spells = wizardInfo.spells;
    this.age = wizardInfo.age;
  }
  
// create a prototype method
  castSpell(spellIndex) {
    console.log(this);
    return `${this.name} casts ${this.spells[spellIndex]}!`
  }

}

var edward = new Wizard({
  name: "Edward",
  beardLength: 26,
  spells: ["hocus pocus", "alacazam"],
  age: 104,
});


// using new syntax to create a subclass of Wizard - Cleric

class Cleric extends Wizard {
  constructor(clericInfo) {
    
//     you don't need to add the same info as above b/c this is not saving you code
//     this.name = clericInfo.name;
//     this.beardLength = clericInfo.beardLength;
//     this.spells = clericInfo.spells;
//     this.age = clericInfo.age;
    
//     'super' invokes the constructor function from the 'super'(wizard) class and sets the value of 'this' to the instance of the subclass
    super(clericInfo); 
    this.god = clericInfo.god;
  }
  
  commune(){
    return `${this.name} is communing with ${this.god}...`
  }
  
//   you can also override methods from the super class
  castSpell(){
    return `${this.name} is casting spells or something.`
  }
  
}


var clarence = new Cleric({
  name: 'Clarence',
  beardLength: 6, 
  spells: ["healing", "piety"],
  age: 120,
  god: "Mazda",
});



