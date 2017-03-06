var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/zoo');

var animalsSchema = mongoose.Schema({
  name: String,
  diet: String
})

var visitorsSchema = mongoose.Schema({
  name: String,
  favoriteAnimal: []
})




var animals = mongoose.model("animals", animalsSchema);
var visitors = mongoose.model("visitors", visitorsSchema);

var animal=[
  {name: "lion",
   diet: "carnivore"},
  
   {name: "tiger",
   diet: "carnivore"},
  
   {name: "horse",
   diet: "herbivore"}
];

var visitor = [
  {name: "Alex",
    favoriteAnimal: ["lion", "horse","monkey"]
  },
  
   {name: "Tom",
    favoriteAnimal: ["tiger", "lion","whale"]
  },
  
   {name: "Bob",
    favoriteAnimal: ["giraffe", "horse","dog"]
  }
];

for (var i = 0; i < animal.length; i ++) {
  new animals (animal[i]).save();
}
              

for (var i = 0; i < visitor.length; i ++) {
  new visitors (visitor[i]).save();
}

visitors.find({favoriteAnimal:"lion"});