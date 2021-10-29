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

    return (
        <Container maxWidth="sm">
            <h1>Todo List</h1>
            {todos.map(todo => <TodoItem todo=todo />)}
        </Container>
    )
}

export default Todo;