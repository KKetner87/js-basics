angular.module("lingoMod")
       .controller("lingoCtrl", lingoCtrl);

function lingoCtrl () {
  var lingo = this;
  
  lingo.greeting="Welcome to Say 'Hello!'"
  
  
  function translate($http){
    console.log('something')
    ({method:'POST',
    url: '/translate',
      data : {
        word:lingo.word,
        from: 'en',
        to: lingo.lang
      }
  }).then(function(res){
      res.data
    })
  }
    
  
  
  
}