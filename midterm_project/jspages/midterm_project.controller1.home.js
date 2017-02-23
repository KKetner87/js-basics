angular.module ("pawsitive")
       .controller("homePage", homeCtrl)

homeCtrl.$inject =["adoptInfo"];

function homeCtrl(adoptInfo) {
  var home = this;
  
  console.log(adoptInfo);
  
  home.greeting = "Pawsitive Altitude Denver Pet Adoption";
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


