angular.module("gold_rush",[]);

angular
      .module("gold_rush")
      .controller("gold", goldCtrl);

goldCtrl.$inject =[];

function goldCtrl () {
  var golden =this;
  console.log ("it works!");
//   golden.addOnClick = function(event) {
//         golden.items.push( {
//             "label": "Click",
//             "value": 100,
//             "x": event.offsetX-50,
//             "y": event.offsety-50,
//         })
// }


  golden.img = "http://vignette2.wikia.nocookie.net/nexttopthingy/images/c/c2/Potato.png/revision/latest?cb=20140421121844"


  golden.lastClickInfo = {},
  golden.mouseClick = function(event){
    console.log(event);

    golden.lastClickInfo.pageX = event.pageX;
    golden.lastClickInfo.pageY = event.pageY;
    // golden.lastClickInfo.pageX.push = event.pageX;
    //golden.lastClickInfo.pageY.push = event.pageY;
  }

  golden.image="https://raw.githubusercontent.com/KKetner87/mywork/master/ng.gold_rush/topo-co.jpg";
}


}
