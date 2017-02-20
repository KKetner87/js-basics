angular.module("gold_rush",[]);

angular
      .module("gold_rush")
      .controller("gold", goldCtrl);

goldCtrl.$inject =[];

function goldCtrl () {
  var golden =this;
  console.log ("it works!");
  golden.addOnClick = function(event) {
        golden.items.push( {
            "label": "Click",
            "value": 100,
            "x": event.offsetX-50,
            "y": event.offsety-50,
        }) 
} 
  golden.checkClick = function(){
    console.log(event);
  }
  golden.image="https://raw.githubusercontent.com/KKetner87/mywork/master/ng.gold_rush/topo-co.jpg";
}


