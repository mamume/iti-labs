import React from 'react';
import { ListItem, Checkbox, ListItemIcon, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


function TodoItem(props) {
    const { id, title, done } = props.todo

    return (
        <ListItem style={{ backgroundColor: done ? '#90EE90' : 'white' }} >
            <ListItemIcon>
                <Checkbox checked={done} onClick={() => props.toggleDone(id)} />
            </ListItemIcon>
            <ListItemText primary={title} />
            <DeleteIcon onClick={() => props.deleteTodo(id)} color="error" />
        </ListItem>
    );
}

export default TodoItem;