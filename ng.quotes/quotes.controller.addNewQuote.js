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






