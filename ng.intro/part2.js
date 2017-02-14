angular.module("changed",[]);

angular
  .module ("changed")
  .controller("text", transform);

function transform () {
  var changes = this;
  console.log ("I'm working!");
  


// app.directive('confirmationNeeded', function () {
//   return {
//     priority: 1,
//     terminal: true,
//     link: function (scope, element, attr) {
//       var msg = attr.confirmationNeeded || "Are you sure?";
//       var clickAction = attr.ngClick;
//       element.bind('click',function () {
//         if ( window.confirm(msg) ) {
//           scope.$eval(clickAction)
//         }
//       });
//     }
//   };
// });


    changes.leavePage = function() {
        var answer = confirm("Are you sure you want to leave this page?")
        if (!answer) {
            event.preventDefault();
        }
    }
}

