angular.module("hideForm", []);

angular
  .module("hideForm")
  .controller("user", userCtrl);

userCtrl.$inject = [];

function userCtrl() {
  var userForm = this;
  console.log("it works!");
}

function userForm() {


  var userInfo = [ 
    {
      name: "Kirsten Ketner",
      bio: "I like food, fitness, and dogs.",
      favBooks: "My favorite books are Good Omens, Harry Potter series, and The Shining.",
      favLibrary: "I like using BootStrap and AngularJS."
    },
  ]

  return {
    updatedInfo: userInfo,
  }
}