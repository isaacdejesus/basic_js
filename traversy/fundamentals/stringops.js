const firstName = "Joe";
const lastName = "Bronson";
const str = 'hello my name is potato man';
let val;

val = firstName + lastName;


//concat
val = firstName + ' ' + lastName;

//append
val = "joey";
val+= "bruceee";    //+= allows to append to current string

//escaping
val = 'That\'s how you scape. I can\'t';

//Length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[2];         //gives char at index 2 

//index of
val = firstName.indexOf('e');       //gives index of char e
val = lastName.lastIndexOf('0');     //gives index of last occurence of o

//char at
val = firstName.charAt(2);          //gives chat at index
//get last char
val = firstName.charAt(firstName.length -1);

//substring
val = lastName.substring(0,4);

//slice
val = lastName.slice(0,4);
val = lastName.slice(-3);       //given a neg value, the slice will take place at back of array

//split a string into an array
val = str.split(' ');           //produces an array of strings composed of words from str

//replace
val = str.replace('potato', 'joe');

//includes()
val = str.includes('hello');        //returns true or false




console.log((val)

