angular.module("quoteSite", ['ngRoute'])
       .config(Router)

Router.$inject = ['$routeProvider'];

function Router($routeProvider) {
  console.log("loading router")
  $routeProvider
    .when('/', {
      templateUrl: '/quotes.listAllQuotes.html',
      controller: 'allQuotes as list'
    })
    .when('/addnewquote', {
      templateUrl: '/quotes.addNewQuote.html',
      controller: 'newQuote as addQuote'
    })
    .otherwise({
      redirect: '/'
    });
}

