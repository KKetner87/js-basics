# Restaurant Objects

## Difficulty - 3/5

## Skills
- Object Constructors
- Higher Order Functions
- Accessing Prototypes

## Background
Object Oriented Programming has been around for a long time because it works.  Organizing your code in an Object Oriented manner allows for modularity and extensibility.  As projects become larger, this level of organization / architecture becomes extremely important.

Leveraging Higher Order Functions is also an important skill.  Re-writing or copy/pasting the same or similar code is inefficient and can end up costing you time in the long run (especially if that duplicated code needs to change).  Being able to leverage code you've already written through other functions/methods will help you stay more organized and your code more maintainable.

## Objective
Define several constructors and prototype methods.

## Resources
- [Introduction to Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- [3 ways to define a JavaScript class](http://www.phpied.com/3-ways-to-define-a-javascript-class/)
- [Eloquent Javascript Ch8 - Object-Oriented Programming](http://eloquentjavascript.net/chapter8.html)

## Requirements

### Part I
- Define a constructor for the following object. Add parameters to the constructor for the given properties and add them as instance variables.
    - Ingredient
        - string name
        - number calories
        - boolean vegan
        - boolean glutenFree
        - boolean citrusFree
- Define a <code>stringify</code> method on the constructor's prototype. It should return a string description of the ingredient including its name, calories, and dietary information, formatted as you choose. <code>stringify</code> should not have any side effects.
Instantiate three different Ingredients and store each in a separate variable. Call <code>stringify</code> on each instance and print the result to the console.
- Instantiate a number of ingredients like beef, bun, tomato, lettuce, avacado, cornChips and lemon

### Part II
- Define a constructor for Plate. 
Add parameters to the constructor for the given properties and add them as instance variables.

- Plate
    - string name
    - string description
    - number price
    - array of Ingredients

- Define a <code>stringify</code> method on each constructor's prototype. This method should return a string representation of the object, formatted as you choose. stringify should not have any side effects. You may want to reuse the <code>stringify</code> method of the contained objects. (e.g. the Order object should call <code>stringify</code> on each of its plates to reuse that functionality instead of having to duplicate the code for each plate).
- Add the following methods to the Plate object
    - boolean `isVegan()`, returns true if every ingredient is vegan
    - boolean `isGlutenFree()`, returns true if every ingredient is gluten free
    - boolean `isCitrusFree()`, returns true if every ingredient is citrus free
    - number `calories()`, returns the total number of calories in all ingredients

- Instantiate a number of plates like Burger, Salad, Guacamole
    - show the total calories in a plate

### Part III
- Define a constructors for Order. 
Add parameters to the constructor for the given properties and add them as instance variables.

- Order
    - number table 
    - array of Plate plates

- Add the following methods to the Order object 
    - boolean `isVegan()`, returns true if every ingredient in every plate is vegan
    - boolean `isGlutenFree()`, returns true if every ingredient in every plate is gluten free
    - boolean `isCitrusFree()`, returns true if every ingredient in every plate is citrus free
    - string `createBill()`, returns the total cost of the plates

- Instantiate a number of orders from tables
    - create a bill for an order