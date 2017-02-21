angular.module ("pawsitive")
       .controller("petPage", petCtrl)

petCtrl.$inject =["adoptInfo"];

function petCtrl(adoptInfo) {
  var animal = this;
  
  animal.available = adoptInfo.pet;

animal.buyPet = function(selectedPet){
  if(selectedPet.qty > 0){
    selectedPet.qty--
  }
}
  animal.isAvailable = function(selectedPet){
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