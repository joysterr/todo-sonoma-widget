const todoItems = []
const todoArea = document.querySelector('.todos')

function addTodo() {
    const inputElement = document.querySelector('#todo-input')

    todoItems.push(inputElement.value)

    inputElement.value = ''
    
    renderTodo()
}

function renderTodo() {
    let todoAllHTML = ''
    for (let i = 0; i < todoItems.length; i++) {
        const html = `
            <div class='todo-line' onclick='todoItems.splice(${i},1); renderTodo(); updateCount();'>
                <button class='todo-check'></button>
                <p>${todoItems[i]}</p>
            </div>
        `
        todoAllHTML += html
    }
    todoArea.innerHTML = todoAllHTML
}