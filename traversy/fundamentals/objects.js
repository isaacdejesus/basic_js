const person = {
    firstName: "joe",
    lastName: "backa",
    age: 88,
    email: 'potato@yahho.com',
    hobbies: ['music', 'potato'],
    address: {
        city: 'Houston',
        state: 'tx'
    },
    getBirthYear: function()
    {
        return 2020 - this.age;
    }
}


let val;

val = person;
//get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [ 
    {name: 'Karl', age: 22},
    {name: 'Joil', age: 77},
    {name: 'nein', age: 28}
];

for( let i = 0; i < people.length; i++)
{
    console.log(people[i].name);
}
