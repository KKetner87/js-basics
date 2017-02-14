angular.module("changed",[]);

angular
  .module ("changed")
  .controller("text", transform);

function transform () {
  var changes = this;
  console.log ("I'm working!");
  
  //changes.changeColor = function(){
    //parColor = {color: pink};
  //}
  
}



//<li ng-repeat="i in persons" ng-style="personColour" ng-mouseenter="changeColor(i)"></li>
//$scope.changeColor = function(person) {
//     /$scope.personColour = {color: '#'+person.colour};
//};
// 