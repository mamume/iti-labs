let todos = []
let id = 0

function deleteTodo(todo) {
    const todoIndex = todos.indexOf(todo)
    todos.splice(todoIndex, 1)
    displayTodos()
}

function toggleComplete(todoID) {
    todos.forEach(todo => {
        if (todo.id === todoID)
            todo.completed = !todo.completed
    })

    displayTodos()
}

function displayTodos() {
    const todoListElement = $('#todo-list')
    // const todoListElement = document.querySelector('#todo-list')

    todoListElement.text("")
    // todoListElement.innerHTML = ''

    if (todos.length === 0)
        todoListElement.html('<li><i>Enter a new Todo</i></li>')
    // todoListElement.innerHTML = '<li><i>Enter a new Todo</i></li>'

    todos.forEach(todo => {
        const checkbox = $('<input type="checkbox" />')
        // const checkbox = document.createElement('input')
        // checkbox.type = 'checkbox'

        if (todo.completed)
            checkbox.attr('checked', '')
        // checkbox.setAttribute('checked', '')

        checkbox.change(() => toggleComplete(todo.id))
        // checkbox.addEventListener('change', () => toggleComplete(todo.id))

        const todoName = $('<span></span>')
        // const todoName = document.createElement('span')
        todoName.text(todo.name)
        // todoName.innerText = todo.name
        if (todo.completed)
            todoName.css('text-decoration', 'line-through')
        // todoName.style.textDecoration = 'line-through'

        const deleteBtn = $('<button>X</button>')
        // const deleteBtn = document.createElement('button')
        // deleteBtn.innerText = 'X'

        deleteBtn.click(() => deleteTodo(todo))
        // deleteBtn.addEventListener('click', () => deleteTodo(todo))

        const liElement = $('<li></li>')
        // const liElement = document.createElement('li')

        liElement.append(checkbox, todoName, deleteBtn)
        todoListElement.append(liElement)
    })
}

function generateId() {
    return id++
}

function createTodoObject(todoInput) {
    return {
        name: todoInput,
        id: generateId(),
        completed: false
    }
}

function addTodo() {
    const todoInput = $('#new-todo')
    // const todoInput = document.querySelector('#new-todo')

    todos.push(createTodoObject(todoInput.val()))

    todoInput.val('')
    // todoInput.value = ''

    displayTodos()
}

$(() => (
    $('#add-btn').click(addTodo)
))

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#add-btn').addEventListener('click', addTodo)
// })