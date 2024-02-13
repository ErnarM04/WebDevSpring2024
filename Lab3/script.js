document.addEventListener('DOMContentLoaded', function () {
    const tasks = document.getElementById('tasks');
    const addButton = document.getElementById('add-task');
    const input = document.getElementById('new-task');

    function addTask(task){
        const taskItem = document.createElement('li');
        taskItem.className = 'task';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox'

        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.id = 'task-text';

        const deleteButton = document.createElement('button');
        deleteButton.id = 'delete';
        deleteButton.addEventListener('click', function () {
            tasks.removeChild(taskItem);
        });

        checkbox.addEventListener('change', function () {
            if(checkbox.checked){
                taskText.id = 'checked';
            }
            else{
                taskText.id = 'task-text';
            }
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);

        tasks.appendChild(taskItem);
    }

    addButton.addEventListener('click', function (){
        const task = input.value.trim();

        if(task !== ''){
            addTask(task);
            input.value = '';
        }
    });

});