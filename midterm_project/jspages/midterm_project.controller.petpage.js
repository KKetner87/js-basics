angular.module("pawsitive")
  .controller("petPage", petCtrl)

petCtrl.$inject = ["adoptInfo"];

function petCtrl(adoptInfo) {
  var animal = this;

  animal.available = adoptInfo.pet;

  animal.buyPet = function(selectedPet, ind) {
   
    $("#myModal" + ind).modal('hide');
    $("#purchase" + ind).modal('show');
    
  }

  animal.purchase = function(selectedPet) {
    console.log(selectedPet)
    $("#close1_open2").click(function() {
     if (selectedPet.qty > 0) {
        selectedPet.qty--
      }
});
  }




// home.editAdopt = function(selectedPet){
//     console.log(selectedPet)
//     $('#selectedPet').modal('show');
//     home.availablePet = selectedPet;
//   }


animal.isAvailable = function(selectedPet) {
  return selectedPet.qty > 0
}

}

//  home.greeting = "Our Selection : ";

//   home.inventory = StockRoom.stock;

//   home.buyBooze = function(boozeItem){
//     if(boozeItem.qty > 0){
//       boozeItem.qty--
//     }
//   }

//   home.isAvailable = function(boozeItem){
//     return boozeItem.qty > 0
//   }
// }