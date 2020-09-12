//UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn  =document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//function to load event listeners
loadEventListerners();

function loadEventListerners()
{
    //dom load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //add task event
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //clear task event
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

//get tasks from local storage
function getTasks()
{
    let tasks;
    if(localStorage.getItem('tasks') == null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(function(task)
    {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);

    })
}
function addTask(e)
{
    if(taskInput.value === '')
    {
        alert('Add a task');
    }

    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //store to local storage
    storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = '';

    e.preventDefault();
}

function storeTaskInLocalStorage(task)
{
    let tasks;
    if(localStorage.getItem('tasks') == null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
//remove task
function removeTask(e) 
{
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        if(confirm('are you sure'))
        {
        e.target.parentElement.parentElement.remove();
        //remove from local storage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskItem)
{
    let tasks;
    if(localStorage.getItem('tasks') == null)
        tasks = [];
    else
        tasks = JSON.parse(localStorage.getItem('tasks'));
        
    tasks.forEach(function(task, index)
    {
        if(taskItem.textContent == task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
//clear tasks
function clearTasks()
{
    //taskList.innerHTML= '';


    //faster way
    while(taskList.firstChild)
    {
        taskList.removeChild(taskList.firstChild);
    }
    //clear local storage
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage()
{
    localStorage.clear();
}

function filterTasks(e)
{
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none';
        }
    });
}
