let todoItems = []
const todoArea = document.querySelector('.todos')
const todoCount = document.querySelector('#counter')

initTodoWidget()

function addTodo() {
    const inputElement = document.querySelector('#todo-input')

    todoItems.push(inputElement.value)

    saveLocally(todoItems)

    inputElement.value = ''

    renderTodo()

    updateCount()
}

function renderTodo() {
    let todoAllHTML = ''
    for (let i = 0; i < todoItems.length; i++) {
        const html = `
                <div class='todo-line' 
                    onclick='
                        todoItems.splice(${i},1);
                        saveLocally(todoItems)
                        renderTodo(); 
                        updateCount();
                    '
                >
                    <button class='todo-check'></button>
                    <p>${todoItems[i]}</p>
                </div>
            `
        todoAllHTML += html
    }
    todoArea.innerHTML = todoAllHTML
}

function updateCount() {
    todoCount.innerHTML = todoItems.length
}

function saveLocally(todos) {
    if (todos[0] !== '' || todos.length === 0 || todos === null) {
        localStorage.setItem('todos', todos)
    }
}

function getLocallySaved() {
    try {
        todoItems = [...(localStorage.getItem('todos').split(','))]
    } catch (e) {
        console.error(e)
    }
}

function resetTodo() {
    if (todoItems[0] === '') {
        localStorage.clear()
        todoItems.pop()
    }
}

function initTodoWidget() {
    getLocallySaved()
    resetTodo()
    updateCount()
    renderTodo()
}