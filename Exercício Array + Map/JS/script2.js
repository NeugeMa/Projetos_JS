// Definindo a matriz
const taskList = [];

// Função para adicionar uma nova tarefa
function addTask() {
    const description = document.getElementById('description').value;
    const author = document.getElementById('author').value;
    const department = document.getElementById('department').value;
    const importance = parseInt(document.getElementById('importance').value);

    const task = {
        description: description,
        author: author,
        department: department,
        importance: importance,
        value: null,
        duration: null
    };

    taskList.push(task);
    renderTaskList();
    clearForm();
}

// Função para renderizar a lista de tarefas
function renderTaskList() {
    const taskListBody = document.getElementById('taskList');
    taskListBody.innerHTML = '';

    taskList.map((task, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.description}</td>
            <td>${task.author}</td>
            <td>${task.department}</td>
            <td>${task.importance}</td>
            <td>${task.value ? task.value : ''}</td>
            <td>${task.duration ? task.duration : ''}</td>
            <td>
                <button onclick="addValueToTask(${index})">Valor</button>
                <button onclick="addDurationToTask(${index})">Duração</button>
                <button onclick="removeTask(${index})">Remover</button>
            </td>
        `;

        taskListBody.appendChild(row);
    });
}

// Resto do código: funções addValueToTask, addDurationToTask, removeTask, clearForm

function addValueToTask(index) {
    const value = prompt('Informe o valor da tarefa:');
    if (value !== null) {
        taskList[index].value = value;
        renderTaskList();
    }
}

function addDurationToTask(index) {
    const duration = prompt('Informe a duração da tarefa:');
    if (duration !== null) {
        taskList[index].duration = duration;
        renderTaskList();
    }
}

function removeTask(index) {
    taskList.splice(index, 1);
    renderTaskList();
}

function clearForm() {
    document.getElementById('description').value = '';
    document.getElementById('author').value = '';
    document.getElementById('department').value = '';
    document.getElementById('importance').value = '';
}

// Chamar a função para renderizar a lista de tarefas inicialmente
renderTaskList();

