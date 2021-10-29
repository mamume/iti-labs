import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


function AddTodo(props) {
    const [todo, setTodo] = useState('')

    function addItem(todo) {
        props.addTodo(todo)

        setTodo('')
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <TextField value={todo} onChange={(e) => setTodo(e.target.value)} size="small" fullWidth id="outlined-basic" label="Add Todo" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" onClick={() => addItem(todo)}>Add</Button>
            </Grid>
        </Grid>
    );
}

export default AddTodo;