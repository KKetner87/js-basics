angular.module ("quoteSite", ['ngRoute'])
       .config(Router)

Router.$inject=['$routeProvider'];

function Router($routeProvider) {
  console.log("loading router")
  $routeProvider
      .when('/', { 
      templateUrl: '/.welcome.html', 
      controller: 'homePage as home'
    })
    .when('/petpage', { 
      templateUrl: '/htmlpages/midterm_project.petpage.html', 
      controller: 'petPage as animal'
    })
  .otherwise( {redirect:'/'});
}
