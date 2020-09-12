const id = 99;

//equal to 
//== compares types
if(id == 99)
{
    console.log("yeah, yeah, okay");
}
else
{
    console.log("nope");
}

//=== compares value and type
// !== for !=
if(id === 99)
{
    console.log("Trueee");
}
else
{
    console.log("Not very true");
}


//test if undefined
if(typeof id !== 'undefined')
{
    console.log(`Id is ${id}`);
}
else
{
    console.log("no id");
}

//logical ops && and || or
const name = 'joe';
const age = 6;

if(age > 0 && age < 12)
{
    console.log(`${name} is a child`);
}
else if ( age >= 13 && age <= 19)
{
    console.log(`${name} is a teen`);
}
else
{
    console.log(`${name} is an adult`);
}


//ternary op
console.log( id === 99 ? 'Correct' : 'Wrong');
