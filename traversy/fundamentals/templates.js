const name = 'Joe';
const age = 66;
const job = 'Potato man';
const city = 'Houston';
let html;

//Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' 
    + job + '</li><li>City: '+ city +'</li></ul>';

html = '<ul>' + 
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>';

function hello(){
    return "Hello, i am the world famous potato man";
}
//with template strings/literals (es6)
//it can take variables, expressions and functions
 html = `
 <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${3*9}</li>
    <li>${hello()}</li>
    <li>${age > 65 ? 'Over 65!!!' : 'Under 65!!!!'}</li>
</ul>
`;

document.body.innerHTML = html;
