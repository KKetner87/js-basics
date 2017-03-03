
angular.module("animal",[]);

angular
  .module ("animal")
  .controller("button", pushForDog);

function pushForDog () {
  var cat=this;
  

cat.youGetAPuppy = function() {
  console.log("You're a lucky dog!");
  cat.message ="BLAHBLAHBLAH";
}


}
