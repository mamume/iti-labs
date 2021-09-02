let todos = []
let id = 0

function deleteTodo(todo) {
    const todoIndex = todos.indexOf(todo)
    todos.splice(todoIndex, 1)
    displayTodos()

    console.log(todos)
}

function toggleComplete(todoID) {
    todos.forEach(todo => {
        if (todo.id === todoID)
            todo.completed = !todo.completed
    })

    displayTodos()
    console.log(todos)
}

function displayTodos() {
    const todoListElement = document.querySelector('#todo-list')

    todoListElement.innerHTML = ''

    if (todos.length === 0)
        todoListElement.innerHTML = '<li>Enter a new Todo</li>'

    todos.forEach(todo => {
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        if (todo.completed)
            checkbox.setAttribute('checked', '')

        checkbox.addEventListener('change', () => toggleComplete(todo.id))

        const todoName = document.createElement('span')
        todoName.innerText = todo.name
        if (todo.completed)
            todoName.style.textDecoration = 'line-through'

        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = 'X'

        deleteBtn.addEventListener('click', () => deleteTodo(todo))

        const liElement = document.createElement('li')
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
    const todoInput = document.querySelector('#new-todo')

    todos.push(createTodoObject(todoInput.value))

    todoInput.value = ''

    displayTodos()
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#add-btn').addEventListener('click', addTodo)
})