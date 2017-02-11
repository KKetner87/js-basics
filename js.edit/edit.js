
var nameEdit = document.querySelector('.user-name > p');
var aboutEdit = document.querySelector('.about > p');

var namePostEdit = document.querySelector('.user-name > input value');
var aboutPostEdit = document.querySelector('.about > input value');



// name <p> to text area // - works!

nameEdit.addEventListener('click', function(){
    
  
  var el = document.querySelector(".user-name > p");
  var preEdit = nameEdit.innerHTML;
  var container = document.querySelector(".user-name");
  container.innerHTML = '<input value ="' + preEdit + '">';
  
});

//text area back to <p>// - broken

namePostEdit.addEventListener('blur', function(){
    
  
  var el = document.querySelector(".user-name > input");
  var postEdit = namePostEdit.innerHTML;
  var container = document.querySelector(".user-name");
  container.innerHTML = '<p>' + postEdit + '</p>';
  
});

// content <p> to  text area // - works!

aboutEdit.addEventListener('click', function(){
    
  
  var el = document.querySelector(".about > p");
  var preEdit = aboutEdit.innerHTML;
  var container = document.querySelector(".about");
  container.innerHTML = '<textarea placeholder = "'+ preEdit + '">';
  
});

// text area back to <p> // - broken

aboutPostEdit.addEventListener('blur', function(){
    
  
  var el = document.querySelector(".about > input");
  var postEdit = aboutPostEdit.innerHTML;
  var container = document.querySelector(".about");
  container.innerHTML = '<p>' + postEdit + '</p>';
  
});


     


