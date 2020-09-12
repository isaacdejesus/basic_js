//function declarations
function greet(firstName = "joe", lastName = "potato")
{
    return "Hello, I am " + firstName + " the " + lastName;
}
    console.log(greet());


//function expressions
const square = function(x = 3)
{
    return x*x;
};

console.log(square());

//immidiatley invokable function expressions iifes
(function(name)
    {
        console.log('hello...'i + name);
    })(Joeeeey);


//property methods


const todo = 
    {
        add:function()
        {
            console.log('add todo..');
        },
        edit: function()
        {
            console.log(`edit to do ${id}`);
        }
    }
 todo.delete = function()
{
    console.log('delete todo...');
}
todo.add();
todo.edit(99);
todo.delete();
