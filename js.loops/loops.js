//0 100 200 300 400 500

for(var i = 0; i < 501; i += 100){
  console.log(i);
}


//1 2 4 8 16 32 64
for(var i = 1; i <= 64; i *= 2) {
  console.log(i);
}


// 1 1 1 2 2 2 3 3 3
var a = 1;
var b = 1;

for (var a =1; a <= 3; a++) {
  for (var b =1; b <= 3; b++) {
    console.log (a);
  }
}



//0 2 4 6 8 10
for (var i = 0; i <= 10; i += 2){
  console.log (i);
}



//3 6 9 12 15
for (var i = 3; i <= 15; i += 3){
  console.log (i);
}



//9 8 7 6 5 4 3 2 1 0

for (var i = 9; i >= 0; i--) {
  console.log (i);
}


// 0 1 2 3 0 1 2 3 0 1 2 3
var a = 1;
var b = 1;

for (var a =0; a <= 3; a++) {
  for (var b =0; b <= 3; b++) {
    console.log (b);
  }
}