import React, { useState } from 'react';
import Container from '@mui/material/Container';
import nextId from "react-id-generator";
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'


function Todo() {
    const [todos, setTodos] = useState([
        {
            id: nextId(),
            title: 'Read a book',
            done: false,
        },
        {
            id: nextId(),
            title: 'Watch a movie',
            done: false,
        },
        {
            id: nextId(),
            title: 'Play a game',
            done: false,
        }
    ])

    function toggleDone(id) {
        const newTodos = todos.map(todo => {
            if (todo.id === id)
                todo.done = !todo.done

            return todo
        })

        setTodos(newTodos)
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat({
            id: nextId(),
            title,
            done: false
        }))
    }

    return (
        <Container maxWidth="sm">
            <h1>Todo List</h1>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleDone={toggleDone}
                    deleteTodo={deleteTodo}
                />
            ))}

            <AddTodo addTodo={addTodo} />
        </Container>
    )
}

export default Todo;