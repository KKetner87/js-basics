angular.module ("pawsitive")
       .controller("homePage", homeCtrl)

homeCtrl.$inject =["adoptInfo"];

function homeCtrl(adoptInfo) {
  var home = this;
  
  console.log(adoptInfo);
  
  home.greeting = "Welcome to Pawsitive Altitude Denver Pet Adoption!";
  home.available = adoptInfo.pet;
  
  home.editAdopt = function(selectedPet){
    console.log(selectedPet)
    $('#selectedPet').modal('show');
    home.availablePet = selectedPet;
  }
  home.notAvailable = function(){
    $('#selectedPet').modal('hide')
  }
  
}






// home.editAdopt = function(boozeItem){
//     console.log(boozeItem)
    
//     // 1. open the modal to edit the boozeItem
//     $('#boozeEdit').modal('show');
    
//     // 2. need to set the data in the form of the modal
//     dash.activeBooze = boozeItem;
    
//   }
  
//   dash.saveBooze = function(){
//     $("#boozeEdit").modal('hide');
//   }
  
// }



// angular.module("BuzzCar")
//   .controller("HomeController", homeCtrl)

// homeCtrl.$inject = ["StockRoom"];
              
// function homeCtrl (StockRoom) {
//   var home = this;
  
// //   console.log(StockRoom)
  
//   home.greeting = "Our Selection : ";
  
//   home.inventory = StockRoom.stock;
  
//   home.buyBooze = function(boozeItem){
//     if(boozeItem.qty > 0){
//       boozeItem.qty--
//     }
//   }
  
//   home.isAvailable = function(boozeItem){
//     return boozeItem.qty > 0
//   }
//  }