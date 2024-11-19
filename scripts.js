function updateDateTime() {
    const date = new Date();
    document.getElementById('dateTime').innerHTML = date.toLocaleString();
}
setInterval(updateDateTime, 1000);

document.addEventListener('DOMContentLoaded', () => {

    const toggleThemeButton = document.getElementById('toggleTheme');
        toggleThemeButton.addEventListener('click', () => {
            if (document.body.style.backgroundColor === 'black') {
                applyLightTheme();
                localStorage.setItem('theme', 'light');
            } else {
                applyDarkTheme();
                localStorage.setItem('theme', 'dark');
            }
        });
    
});

function applyDarkTheme() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}

function applyLightTheme() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}


document.getElementById('updateGreetingButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    document.getElementById('greeting').textContent = `Hello, ${name || 'Guest'}!`;
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('error-message').textContent = 'Please enter a valid email address.';
        document.getElementById('success-message').textContent = '';
    } else {
        document.getElementById('success-message').textContent = 'Your message has been sent successfully!';
        document.getElementById('error-message').textContent = '';
    }
});

function addTask() {
    const taskText = document.getElementById('newTask').value;
    if (taskText) {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        taskItem.className = 'list-group-item';
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        document.getElementById('newTask').value = '';
        saveTasks();
    }
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(taskItem => {
        tasks.push(taskItem.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        savedTasks.forEach(taskText => {
            const taskList = document.getElementById('taskList');
            const taskItem = document.createElement('li');
            taskItem.className = 'list-group-item';
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
        });
    }
}
loadTasks();
