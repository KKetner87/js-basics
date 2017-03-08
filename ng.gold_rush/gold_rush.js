angular.module("gold", [])
  .controller("mainCtrl", mainCtrl);

mainCtrl.$inject = [];


function mainCtrl() {
  var flagCtrl = this;

  console.log("it works!");

  flagCtrl.goldMines = [];
  flagCtrl.addingANote = false;


  flagCtrl.addMarker = function(event) {
    flagCtrl.lastClick = {
      pageX: event.pageX / document.body.clientWidth * 100,
      pageY: event.pageY / document.body.clientWidth * 100,
      note: '',
    };


    flagCtrl.goldMines.push(flagCtrl.lastClick);
    console.log("Adding marker at " + flagCtrl.lastCLick + "(" + flagCtrl.goldMines.length + ")");

    flagCtrl.img = "https://raw.githubusercontent.com/KKetner87/mywork/master/ng.gold_rush/topo-co.jpg";
  }

  flagCtrl.addANote = function() {
    flagCtrl.goldMines[flagCtrl.goldMines.length - 1].note = flagCtrl.note;
    flagCtrl.addingANote = false;
    flagCtrl.note = '';
  }

  flagCtrl.removeFlag = function(index) {
    if (confirm("Do you really want to remove the potato??")) {
      flagCtrl.goldMines.splice(index - 1);
    }

  }
}