angular.module("changed",[]);

angular
  .module ("changed")
  .controller("text", transform);

function transform () {
  var changes = this;
  console.log ("I'm working!");
  
  changes.link="Hold on to your butts!";


    changes.leavePage = function() {
        var answer = confirm("Are you sure you want to leave this page?")
        if (!answer) {
            event.preventDefault();
            changes.link ="";
        }
    }
    
      changes.link2="Play Slender Man!";


    changes.leavePage2 = function() {
        var answer = confirm("Are you sure you want to leave this page?")
        if (!answer) {
            event.preventDefault();
            changes.link2 ="";
        }
    }
}

