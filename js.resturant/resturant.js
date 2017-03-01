class FoodItem {
  constructor(foodInfo) {
    this.name = foodInfo.name;
    this.calories = foodInfo.calories;
    this.vegan = foodInfo.vegan;
    this.glutenFree = foodInfo.glutenFree;
    this.citrusFree = foodInfo.citrusFree;
  }

  stringify() {
    var describe = this.name + " has " + this.calories + " calories and";
    describe += this.vegan ? " is vegan," : " is not vegan,";
    describe += this.glutenFree ? " is GF," : " is not GF,";
    describe += this.citrusFree ? " and is CF." : " and is not CF.";
    return describe
  }
}

class Drink {
  constructor(drinkInfo) {
    this.name = drinkInfo.name;
    this.description = drinkInfo.description;
    this.price = drinkInfo.price;
    this.ingredients = drinkInfo.ingredients;
  }

  veganCheck() {
    for (var i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].vegan === false) {
        console.log(this.name + " is NOT vegan!");
        return false
      }
    }
    console.log(this.name + " is vegan!");
    return true
  }

  gfCheck() {
    for (var i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].glutenFree === false) {
        console.log(this.name + " is NOT GF!");
        return false
      }
    }
    console.log(this.name + " is GF!");
    return true
  }

  cfCheck() {
    for (var i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].citrusFree === false) {
        console.log(this.name + " is NOT CF!");
        return false
      }
    }
    console.log(this.name + " is CF!");
    return true
  }

  stringify() {
    var description = this.name + " is " + this.description + "\n$" + this.price + ".";
    return description
  }
}



class Plate {
  constructor(plateInfo) {
    this.name = plateInfo.name;
    this.description = plateInfo.description;
    this.price = plateInfo.price;
    this.ingredients = plateInfo.ingredients;
  }

  veganCheck() {
    for (var i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].vegan === false) {
        console.log(this.name + " is NOT vegan!");
        return false
      }
    }
    console.log(this.name + " is vegan!");
    return true
  }

  gfCheck() {
    for (var i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].glutenFree === false) {
        console.log(this.name + " is NOT GF!");
        return false
      }
    }
    console.log(this.name + " is GF!");
    return true
  }

  cfCheck() {
    for (var i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].citrusFree === false) {
        console.log(this.name + " is NOT CF!");
        return false
      }
    }
    console.log(this.name + " is CF!");
    return true
  }

  stringify() {
    var description = this.name + " is " + this.description + "\n$" + this.price + ".";
    return description
  }

}



class Order {
  constructor(orderInfo) {
    this.plate = orderInfo.plate;
  }

  stringify() {
    var receipt ="";
     for(var i = 0; i < this.plate.length; i++){
       receipt += this.plate[i].name ="\n";
     }
 return receipt;
  }
}



class Menu {
  constructor(menuInfo) {
    this.plate = menuInfo.plate;
  }
  
  stringify() {
    var cartMenu ="";
     for(var i = 0; i < this.plate.length; i++){
       cartMenu += this.plate[i].name + "   $" + this.plate[i].price + "\n " + this.plate[i].description;
     }
 return cartMenu;
  }

}



class Restaurant {
  constructor(restaurantInfo) {
    this.name = restaurantInfo.name;
    this.description = restaurantInfo.description;
    this.menu = restaurantInfo.menu;
  }

}



class Customer {
  constructor(customerInfo) {
    this.dietaryRestrictions = customerInfo.dietaryRestrictions;
  }

}



// foodItems

var eggplant = new FoodItem({
  name: "Eggplant",
  calories: 20,
  vegan: true,
  glutenFree: true,
  citrusFree: true,
})

var groundBeef = new FoodItem({
  name: "Ground beef",
  calories: 93,
  vegan: true,
  glutenFree: true,
  citrusFree: true,
})

var cornTortilla = new FoodItem({
  name: "Corn tortilla",
  calories: 62,
  vegan: true,
  glutenFree: true,
  citrusFree: true,
})

var flourTortilla = new FoodItem({
  name: "Flour tortilla",
  calories: 237,
  vegan: true,
  glutenFree: false,
  citrusFree: true,
})

var lettuce = new FoodItem({
  name: "Lettuce",
  calories: 5,
  vegan: true,
  glutenFree: true,
  citrusFree: true,
})

var tomatoe = new FoodItem({
  name: "Tomatoes",
  calories: 22,
  vegan: true,
  glutenFree: true,
  citrusFree: true,
})

var lime = new FoodItem({
  name: "Lime",
  calories: 20,
  vegan: true,
  glutenFree: true,
  citrusFree: false,
})

var mexicanChocolateIcecream = new FoodItem({
  name: "Mexican chocolate icecream",
  calories: 332,
  vegan: false,
  glutenFree: false,
  citrusFree: true,
})

var beer = new FoodItem({
  name: "beer",
  calories: 100,
  vegan: true,
  glutenFree: false,
  citrusFree: false,
})

var gfbeer = new FoodItem({
  name: "gfbeer",
  calories: 100,
  vegan: true,
  glutenFree: true,
  citrusFree: true,
})

// drinkItems

var corona = new Drink({
  name: "Corona",
  description: "Mexican classic beer",
  price: 3,
  ingredients: [beer, lime]
})

var greens = new Drink({
  name: "Greens",
  description: "Gluten-free beer",
  price: 4,
  ingredients: [gfbeer]
})

//plateItem
var cornTaco = new Plate({
  name: "Corn tortilla taco",
  description: "a GF corn tortilla taco made with organic ingredients: ground beef, tomatoe, and lettuce.",
  price: 6,
  ingredients: [cornTortilla, tomatoe, lettuce, groundBeef],
})

var flourTaco = new Plate({
  name: "Flour tortilla taco",
  description: "a flour tortilla taco made with organic ingredients: ground beef, tomatoe, and lettuce.",
  price: 6,
  ingredients: [flourTortilla, tomatoe, lettuce, groundBeef],
})

var veganGfTaco = new Plate({
  name: "Vegan GF tortilla taco",
  description: "a vegan, GF corn tortilla taco made with organic ingredients: eggplant, tomatoe, and lettuce.",
  price: 8,
  ingredients: [cornTortilla, tomatoe, lettuce, eggplant],
})

var veganTaco = new Plate({
  name: "Vegan flour tortilla taco",
  description: "a vegan, flour tortilla taco made with organic ingredients: eggplant, tomatoe, and lettuce.",
  price: 8,
  ingredients: [flourTortilla, tomatoe, lettuce, eggplant],
})

//order
var partyOfTwo= new Order ({
  plate:[cornTaco, flourTaco, veganGfTaco, veganTaco],
})

// menu
var tacoMenu = new Menu({
  plate: [cornTaco, flourTaco, veganGfTaco, veganTaco],
  drink: [corona, greens],
})

//resturant
var tacoStand = new Restaurant({
  name: "Our Taco Stand",
  description: "Delicious organic tacos!",
  menu: tacoMenu,
})