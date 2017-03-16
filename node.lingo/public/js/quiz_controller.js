angular.module("lingoMod")
       .controller("quizCtrl", quizCtrl);

quizCtrl.$inject = ['$http'];


function quizCtrl ($http) {
  var quiz = this;
  
  quiz.question = {
    words :[{word : 'one',
           answer : ''},
          { word : 'two',
           answer : ''},
           {word : 'three',
           answer : ''},
          { word : 'four',
           answer : ''},
           {word : 'five',
           answer : ''},
          { word : 'six',
           answer : ''},
           {word : 'seven',
           answer : ''},
          { word : 'eight',
           answer : ''},
           {word : 'nine',
           answer : ''},
          { word : 'ten',
           answer : ''},]
  }
  quiz.greeting="Prepare to be quizzed!"


//   lingo.translate = function (){

//     $http({method:'POST',
//     url: '/translate',
//       data : {
//         word: lingo.word,
//         from: 'en',
//         to: lingo.lang
//       }
//   }).then(function(res){
//       console.log(res.data);

//       lingo.resData = res.data.translatedText;
//       console.log(lingo.resData)
//     })
//   }

}
