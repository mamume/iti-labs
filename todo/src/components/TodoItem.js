import React from 'react';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function TodoItem(props) {
    const { id, title, done } = props.todo
    // const labelId = `checkbox-list-label-${id}`;
    // const [checked, setChecked] = React.useState([done]);

    // const handleToggle = (value) => () => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];

    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //     } else {
    //         newChecked.splice(currentIndex, 1);
    //     }

    //     setChecked(newChecked);
    // };

    return (
        <ListItem disablePadding>
            <ListItemIcon>
                <Checkbox checked={done} onClick={() => props.toggleDone(id)} />
            </ListItemIcon>
            <ListItemText id={id} primary={title} />
        </ListItem>
    );
}

export default TodoItem;