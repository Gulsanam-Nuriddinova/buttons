// Elementlarni tanlash
const input = document.getElementById('task-input');
const addButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Vazifani qo'shish funksiyasi
addButton.addEventListener('click', () => {
    const task = input.value.trim();
    if (task) {
        const listItem = document.createElement('li');

        // Vazifa matni
        const taskText = document.createElement('span');
        taskText.textContent = task;
        listItem.appendChild(taskText);

        // Vaqtni qo'shish
        const timeSpan = document.createElement('span');
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSpan.textContent = ` (${formattedTime})`;
        timeSpan.classList.add('time');
        listItem.appendChild(timeSpan);

        // Bajarilgan sifatida belgilash
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        // O'chirish tugmasi
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'O‘chirish';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        input.value = ''; // Inputni tozalash
    }
});
