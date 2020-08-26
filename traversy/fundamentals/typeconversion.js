let val;

//Number to String
val = String(5);
val = String(4+8);
//Bool to String
val = String(true);
//Date to String
val = String(new Date());
//Array to String
val = String([1,2,3,4]);

//toString() also converts other datatypes to String type
val = (5).toString();

//String to Number
val = Number('6');
val = Number(true);
val = Number ("random words");
val = Number ([1,2]);

//parseInt converts to Int
val = parseInt('100');
val = parseFloat('300.33');

//output
console.log(val);
console.log(typeof val);
//console.log(val.length);      //this one only works on String
console.log(val.toFixed(2));

