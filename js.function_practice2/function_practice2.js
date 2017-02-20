//function called 'getName'//
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'
function getName(object) {
  console.log(object.name)
}

getName({name: 'Luisa', age: 25});


//function called 'totalLetters'//
// totalLetters(['javascript', 'is', 'awesome']) should return 19.
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24.
function totalLetters (string) {
  var length=0;
  for (var i=0; i < string.length; i++){
    length = length + string[i].length;
  }
  console.log(length);
}

totalLetters(['javascript', 'is', 'awesome']);
totalLetters(['what', 'happened', 'to', 'my', 'function']);



//function called 'keyValue'//
//keyValue('city', 'Denver') should return Object {city: "Denver"}
function keyValue(object1, object2) {
  var location = {
    city: object2
  }
  console.log(location);
}

keyValue('city', 'Denver')


//function called 'negativeIndex'//
//negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'.
//negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'.
function negativeIndex (arr, i) {
 var dog = arr.length + i;
  console.log(arr[dog]);
}

negativeIndex(['a', 'b', 'c', 'd', 'e'], -2);
negativeIndex(['jerry', 'sarah', 'sally'], -1);


//function called 'removeM'//
//removeM('family') should return 'faily'.
//removeM('memory') should return 'eory'.
function removeM (string) {
  var stringArr = string.split('');
  var newString = "";
  for(var i =0; i < stringArr.length; i ++) {
    if(stringArr[i] !== "m"){
      newString = newString + stringArr[i];
    }
  } console.log(newString);
}

removeM('family');
removeM('memory');

//function called 'printObject//
//printObject({ a: 10, b: 20, c: 30 }) should print: a is 10 b is 20 c is 30.
//printObject({ firstName: 'pork', lastName: 'chops' }) should print: firstName is pork lastName is chops.
function printObject (value) {
  for(var i in value) {
    if(value.hasOwnProperty(i)) {
      console.log(i + " is " + value[i]);
    }
  }
}

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });

//function called 'vowels'//
//vowels('alabama') should return ['a', 'a', 'a', 'a'].
//vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u'].
function vowels(string) {
  var stringArr = string.split('');
  var newString = "";
  for(var i =0; i < stringArr.length; i ++) {
    if(stringArr[i] === "a" || stringArr[i] === "e" || stringArr[i] === "i" || stringArr[i] === "o" || stringArr[i] === "u") {
      newString = newString + stringArr[i];
    }
  } console.log(newString);
}

vowels('alabama');
vowels('What evil odd ducks!');


//function called 'twins'//
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true.
// twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false.
// twins(['a', 'a', 'b', 'z']) should return false.
// twins(['a', 'a', undefined]) should return false
var twins = function checkTwins(same) {
  for(var i = 0; i < same.length; i++)
    {
  if(same[i +2] ==+ undefined) {
    return false;
   } else if (same[i] === same[i+1] && same[i+2] === same[i+3] && same[i+4] === same[i+5]){
     return true;
   } else {
     return false;
   }
    }
};

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));

console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));

console.log(twins(['a', 'a', 'b', 'z']));

console.log(twins(['a', 'a', undefined]));

//function called 'or' //
//or([false, false, true, false]) should return true.
//or([false, false, false]) should return false.
//or([]) should return false.
function or (array) {
  var stuff= false;
  for(var i =0; i < array.length; i ++) {
    if(array[i] === true) {
      stuff = true;
    }
  } console.log(stuff);
}

or([false, false, true, false]);
or([false, false, false]);
or([]);


//function called 'unique' //
//unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd'].
//unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria'].
function unique (array) {
  var newArray=$.unique(array);
  console.log(newArray);
} 

unique(['a', 'b', 'a', 'c', 'd', 'd']) ;
unique(['todd', 'avery', 'maria', 'avery']);


