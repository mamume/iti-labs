import React from 'react';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';


function TodoItem(props) {
    const { id, title, done } = props.todo

    return (
        <ListItem style={{ backgroundColor: done ? '#90EE90' : 'white' }} >
            <ListItemIcon>
                <Checkbox checked={done} onClick={() => props.toggleDone(id)} />
            </ListItemIcon>
            <ListItemText primary={title} />
            <DeleteIcon onClick={() => props.deleteTodo(id)} />
        </ListItem>
    );
}

export default TodoItem;