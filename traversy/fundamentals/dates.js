let val;

const today = new Date();
let birthday = new Date('9-9-1999 11:25:00');
birthday = new Date('September 99 1999');
birthday = new Date('9/29/999');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1992);


//val = birthday;

console.log(birthday);
