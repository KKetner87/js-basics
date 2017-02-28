angular.module("quoteSite")
  .controller("newQuote", newCtrl)

newCtrl.$inject = [];

function newCtrl() {
  var addQuote = this;



  addQuote.validate = function() {
    if (document.getElementById("quoteNew").value === "") {
      alert("Please remember to fill out your new quote");
    } else if (document.getElementById("authorNew").value === "") {
      alert("The author can't be left blank, but you can always enter 'Unknown'.");
    }
  }

}






// angular.module("pawsitive")
//   .controller("petPage", petCtrl)

// petCtrl.$inject = ["adoptInfo", "$timeout"];

// function petCtrl(adoptInfo,$timeout ) {
//   var animal = this;

//   animal.available = adoptInfo.pet;

//       animal.showPet =function(selectedPet) {
//         console.log(selectedPet)
//         var ind = animal.available.indexOf (selectedPet)
//         $("#myModal" + ind).modal('show');
//       }

//     animal.searchResults = function(selectedPet, ind) {
//     $("#results" ).modal('show')
//   }


//     animal.buyPet = function(selectedPet) {

//     var ind = animal.available.indexOf(selectedPet)
//     $("#myModal" + ind).modal('hide');
//     $("#purchase" + ind).modal('show');

//   }


//   animal.purchase = function(selectedPet) {
//     console.log(selectedPet)
//     $timeout(function() {
// //            if (selectedPet.qty > 0) {
// //         selectedPet.qty--
// //       }
//       animal.available.splice(animal.available.indexOf(selectedPet),1)
//     }, 200)
//   }

// animal.isAvailable = function(selectedPet) {
//   return selectedPet.qty > 0
// }

// }