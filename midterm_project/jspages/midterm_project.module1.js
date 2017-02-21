angular.module ("pawsitive", ['ngRoute'])
       .config(Router)
      
Router.$inject=['$routeProvider'];

function Router($routeProvider) {
  console.log("loading router")
  $routeProvider
      .when('/', { 
      templateUrl: '/htmlpages/midterm_project.welcome.html', 
      controller: 'homePage as home'
    })
    .when('/petpage', { 
      templateUrl: '/htmlpages/midterm_project.petpage.html', 
      controller: 'petPage as animal'
    })
  .otherwise( {redirect:'/'});
}



// // first we need to list ngRoute as a dependency in our app
// angular.module('cafe',['ngRoute'])
//   .controller('CafeController', cafeFunction)
//   .controller('OriginsController', originsFunction)
//   .config(Router)

// // then we "inject" that dependency into our router
// // Note that we include the name of (quoted string) the dependency in the array
// Router.$inject = ['$routeProvider']

// // then we add that dependency as a parameter (no quotes) for our function
// function Router($routeProvider) {
// //   console.log("loading router")
  
//   // This is where the routing magic happens
//   $routeProvider
//     // add a .when for each angular route you want to add
//   // each route will specify the template Url to replace the ng-view
//   // element in our html, and it may optionally also include a controller 
//   // that will have scope in that ng-view section
//     .when('/', { 
//       templateUrl: '/templates/home.html', 
//       controller: 'CafeController as cCtrl'
//     })
//     .when('/menu', { 
//       templateUrl: '/templates/menu.html', 
//       controller: 'CafeController as cCtrl'
//     })
//     .when('/origins', { 
//       templateUrl: '/templates/origins.html', 
//       controller: 'OriginsController as oCtrl'
//     })
//   .otherwise( {redirect:'/'});
// }

// function originsFunction() {
//   var oCtrl = this;
// //   console.log("loading origins controller")
//   // create an array of origins to display in our origins template
//   oCtrl.origins = [
//     'Columbia: land of the dark mocha bean',
//     'Guatemala: sweet, flowery and fruity coffees',
//     'Brazil: where our beans dance to the music'
//   ];
// }

// function cafeFunction() {
// //   console.log("loading cafe controller")
//   var cCtrl = this;
  
//   cCtrl.heading = 'Have a seat and enjoy a cup!'
  
//   cCtrl.coffees = [
//     {
//       name: 'Chai Latte',
//       price: 3
//     },{
//       name: 'Americano',
//       price: 2
//     },{
//       name: 'Looooong Cooooooofffffeee',
//       price: 16
//     }
//   ]
  
// }
