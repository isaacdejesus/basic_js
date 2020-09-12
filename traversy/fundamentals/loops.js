//for loops
for( let i = 0; i < 10; i++)
{
    if(i ===2)
    {
        console.log('2 is a terrible choice');
        continue;
    }
    if(i === 5)
    {
        console.log('break the loop');
        break;
    }
console.log(i);
}


//while

let i = 0;
while(i < 12)
{
    console.log(i);
i++
}

//dowhile

let i = 100;
 do
{
    console.log(i);
    i++;
}
while(i < 10);

//loop array
const cars = ['ford', 'chevy', 'honda', 'toyota'];

for( let i = 0; i < cars.length; i++)
{
    console.log(cars[i]);
}


//forea
cars.forEach(function(car, index, array)
    {
        console.log(`${index} : ${car}`);
        console.log(array);
    });

//map
const users = [
    {id:1, name: 'Joe'},
    {id:2, name: 'sarah'},
    {id:3, name: 'karen'}
];

const ids = users.map(function(user)
    {
        return user.id;
    });

console.log(ids);


const user = {
    firstName: "jope",
    lastName: "jokoe",
    age:49
}

for( let x in user)
{
    console.log(`${x} : ${user[x]}`);
}
