const input = document.getElementById('task-input');
const addButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', () => {
    const task = input.value.trim();
    if (task) {
        const listItem = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.textContent = task;
        listItem.appendChild(taskText);

        const timeSpan = document.createElement('span');
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSpan.textContent = ` (${formattedTime})`;
        timeSpan.classList.add('time');
        listItem.appendChild(timeSpan);

        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'O‘chirish';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        input.value = ''; 
    }
});
