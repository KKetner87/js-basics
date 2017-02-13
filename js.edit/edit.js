
var nameEdit = document.querySelector('.user-name > p');
var aboutEdit = document.querySelector('.about > p');

var namePostEdit = document.querySelector('.user-name > input');
var aboutPostEdit = document.querySelector('.about > textarea');

//namePostEdit.style.display = 'show';

// name <p> to text area // 

nameEdit.addEventListener('click', function(){
    
  // Copy value into editable one 
  var preEdit = nameEdit.innerHTML;
  namePostEdit.value = preEdit;
  nameEdit.style.display = 'none';
  namePostEdit.style.display = 'block';
  
});

//text area back to <p>// 

namePostEdit.addEventListener('blur', function(){
    
  
  var postEdit = namePostEdit.value;
  namePostEdit.style.display = 'none';
  nameEdit.innerHTML = postEdit;
  nameEdit.style.display = 'block';

  
});

// content <p> to  text area // 

aboutEdit.addEventListener('click', function(){
    
  var preEdit = aboutEdit.innerHTML;
  aboutPostEdit.value = preEdit;
  aboutEdit.style.display = 'none';
  aboutPostEdit.style.display = 'block';
  
});

// text area back to <p> //

aboutPostEdit.addEventListener('blur', function(){
  
  
  var postEdit = aboutPostEdit.value;
  aboutPostEdit.style.display = 'none';
  aboutEdit.innerHTML = postEdit;
  aboutEdit.style.display = 'block';
  
});


     


