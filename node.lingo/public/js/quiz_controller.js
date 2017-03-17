angular.module("lingoMod")
       .controller("quizCtrl", quizCtrl);

quizCtrl.$inject = ['$http'];


function quizCtrl ($http) {
  var quiz = this;

  quiz.question = {
    words :[{word : 'Hello',
           answer : ''},
          { word : 'Dog',
           answer : ''},
           {word : 'Yes',
           answer : ''},
          { word : 'Ten',
           answer : ''},
           {word : 'Green',
           answer : ''},
          { word : 'Bathroom',
           answer : ''},
           {word : 'Goodbye',
           answer : ''},
          { word : 'Woman',
           answer : ''},
           {word : 'Good',
           answer : ''},
          { word : 'Love',
           answer : ''},
  ]}
  quiz.greeting="Prepare to be quizzed!"

  quiz.translate = function (){

    $http({method:'POST',
    url: '/quiz',
      data : {
        word: quiz.question.words.map(function(word){
          return word.word
        }),
        from: 'en',
        to: quiz.lang
      }
  }).then(function(res){
      quiz.resData = res.data;
      quiz.quizLength = quiz.resData.length;
      console.log(quiz.quizLength)


      ////////////////////////////////////////////
      // CHECKING ANSWERS
      ////////////////////////////////////////////

      for (var i = 0; i < quiz.quizLength; i++){
        console.log('Correct Answer ' + quiz.resData[i].translatedText + ' Your Answer ' + quiz.question.words[i].answer)
        if (quiz.resData[i].translatedText == quiz.question.words[i].answer){
          console.log('Awesome')
        }else{
          console.log('No Dice')
        }

        // console.log(quiz.resData[i].translatedText, quiz.question.words[i].word, quiz.question.words[i].answer)
      }





    })
  }


////////////////////////////////////////////
// CHECKING ANSWERS
////////////////////////////////////////////

// for (var i = 0; i < quizLength; i++){
//   console.log(quiz.resData[i].translatedText)
//   console.log(quiz.question.words[i].word)
// }


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
