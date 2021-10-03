class Todo {
    constructor(todos = [], id = 0) {
        this.todos = todos;
        this.id = id;
    }

    deleteTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
        this.displayTodos();
    }

    toggleComplete(todoID) {
        this.todos.forEach(todo => {
            if (todo.id === todoID)
                todo.completed = !todo.completed;
        });

        this.displayTodos();
    }

    displayTodos() {
        const todoListElement = document.querySelector('#todo-list');

        todoListElement.innerHTML = '';

        if (this.todos.length === 0)
            todoListElement.innerHTML = '<li><i>Enter a new Todo</i></li>';

        this.todos.forEach(todo => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            if (todo.completed)
                checkbox.setAttribute('checked', '');

            checkbox.addEventListener('change', () => this.toggleComplete(todo.id));

            const todoName = document.createElement('span');
            todoName.innerText = todo.name;
            if (todo.completed)
                todoName.style.textDecoration = 'line-through';

            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'X';

            deleteBtn.addEventListener('click', () => this.deleteTodo(todo));

            const liElement = document.createElement('li');
            liElement.append(checkbox, todoName, deleteBtn);
            todoListElement.append(liElement);
        });
    }

    generateId() {
        return this.id++;
    }

    createTodoObject(todoInput) {
        return {
            name: todoInput,
            id: this.generateId(),
            completed: false
        };
    }

    addTodo() {
        const todoInput = document.querySelector('#new-todo');

        this.todos.push(this.createTodoObject(todoInput.value));

        todoInput.value = '';

        this.displayTodos();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const todos = new Todo();

    document.querySelector('#add-btn').addEventListener('click', () => {
        todos.addTodo();
    });
});