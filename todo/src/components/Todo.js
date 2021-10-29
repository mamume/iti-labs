import React, { useState } from 'react';
import Container from '@mui/material/Container';
import nextId from "react-id-generator";
import TodoItem from './TodoItem'


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
        console.log('hi')
        const newTodos = todos.filter(todo => todo.id !== id)
        console.log(newTodos)
        setTodos(newTodos)
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
        </Container>
    )
}

export default Todo;