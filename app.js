var prompt = require('sync-prompt').prompt;

/* function to increase variable by 1*/
function increment(x){
  x++;
  return x;
}
var z = increment(3);
console.log(z);
var z = increment(7);
console.log(z);
var z = increment(9);
console.log(z);
var z = increment(12);
console.log(z);

/*squaring function*/
function square(y){
  y *= y;
  return y;
}
var z = square(8);
console.log(z);
var z = square(0);
console.log(z);
var z = square(653);
console.log(z);

/*area function*/
function area(a,b){
  var room = a * b;
  return room;
}

var z = area(3,4);
console.log(z);
var z = area(12,5);
console.log(z);

/*volume function*/
function volume(l,w,h){
  return area(l,w)*h;
}

var z = volume(4,5,2);
console.log(z);

var z =area(square(increment(3)+ increment(4)),square(2));
console.log(z);

function sayHello(){
  return console.log('Hello!');
}

var z = sayHello();

function makeUpper(string){
  return string.toUpperCase();
}
var z;

z = makeUpper('hello');
console.log(z);


function canDrink(age){
  return (age >= 21);
}

var z;
z = canDrink(22);
console.log(z);
z = canDrink(9);
console.log(z);









