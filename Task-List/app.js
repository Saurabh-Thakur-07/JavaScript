//Define UI variables
const form = document.querySelector('#task-form');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');

//load all event listeners
loadEventListeners();

function loadEventListeners(){
    //add event task
    form.addEventListener('submit',addTask);

    //event delegation is used here we add a event listener on the tasklist
    taskList.addEventListener('click',removeTask);

    //now for the clear tasks
    clearBtn.addEventListener('click',clearTasks);
}

function addTask(e){
    if(taskInput.value === ''){
        alert('add something'); 
    }
    //creating the li element
    const li = document.createElement('li');
    //in materialize css for li to look good it should have a class collection-item
    li.className = 'collection-item';
     //add the task to li 
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    
    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);

    taskInput.value = '';
    e.preventDefault();
}
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}
function clearTasks(e){
    taskList.innerHTML = '';
}