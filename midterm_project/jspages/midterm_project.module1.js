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




