angular.module("hideForm", []);

angular
  .module("hideForm")
  .controller("user", userCtrl);

userCtrl.$inject = [];

function userCtrl() {
  var userForm = this;
  console.log("it works!");

  //   userForm.userInfo = [ 
  //     {
  //       name: 'Kirsten Ketner',
  //       bio: 'I like food, fitness, horror movies, and dogs.',
  //       favBooks: 'My favorite books are Good Omens and The Shining.',
  //       favLibrary: 'I like using BootStrap and AngularJS.'
  //     }
  //     ];
  // }

  userForm.name= 'Kirsten Ketner';
  userForm.bio='I like food, fitness, horror movies, and dogs.';
  userForm.favBooks= 'My favorite books are Good Omens and The Shining.';
  userForm.favLibrary= 'I like using BootStrap and AngularJS.';
}