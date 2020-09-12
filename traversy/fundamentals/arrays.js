//create arrays
const numbers = [9, 33, 22, 44];
const numbers2 = new Array(22, 33, 55, 3, 5);
const mixed = ["hello", 8, true, undefine, null];       //arrays can hold all kinds of datatypes

let val;

//Get length
val = numbers.length;
//check if array
val = Array.isArray(numbers);
//get single val
val = numbers[3];
//insert
numbers[2] = 100;
//find index of val
val = numbers.indexOf(44);

//Mutations
//add to end
numbers.push(99);
//add to front
numbers.unshift(155);
//remove from end
numbers.pop();
//remove from front
numbers.shift();
//splice valus
numbers.splice(1,1);
//reverse
numbers.reverse();

//cancat
val = numbers.concat(numbers2);
//sort
val = numbers.sort();

//compare function to sort numbers
val = numbers.sort(function(x,y){
    return x - y;
});

//reverse sort
val = numbers.sort(function(x,y){
    return y - x;
});

//find
function under50(num){
    return num <50;
}

val = numbers.find(under50);


console.log(numbers);
console.log(val);
