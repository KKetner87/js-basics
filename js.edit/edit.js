var nameEdit = document.querySelector('.user-name > p');
var aboutEdit = document.querySelector('.about > p');


nameEdit.addEventListener('click', function(){
    
  
  var el = document.querySelector(".user-name > p");
  var preEdit = nameEdit.innerHTML;
  var container = document.querySelector(".user-name");
  container.innerHTML = '<input value ="' + preEdit + '">';
  
});
                           
                          
                          
                          
                          
  
  
   // Function to make the text area look like a static page//

//function myFunction() {
    //document.getElementById("name").innerHTML = "John Smith";
//}

// Function for the onclick to make the textarea editable//





//Function for the blur to return the textarea to looking static//

// 2. Listen for an Event / Define event handler
//$clickerEl.addEventListener('click', changeHeaderClicker);
// app.get('/index.html', giveThemTheFile); // express
// socket.on('someEvent', doTheThing); // sockets


//function changeHeaderClicker(){
 // console.log('Clicked!');
  //$clickerEl.innerHTML += "You Clicked Me!"; // Set the content inside of the element
//   $clickerEl.innerHTML = $clickerEl.innerHTML + "You Clicked Me!";
//}          


