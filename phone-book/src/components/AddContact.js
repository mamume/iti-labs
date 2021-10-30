import React, { Fragment, useState } from 'react';
import { Modal, Grid, Button, Typography, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AddContact(props) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [pnumber, setPnumber] = useState('')

    function addContact() {
        props.addContact({
            name,
            address,
            pnumber
        })

        setOpen(false)
        clearInputs()
    }

    function clearInputs() {
        setPnumber('')
        setName('')
        setAddress('')
    }

    return (
        <Fragment>
            <Grid container my={2} direction='row-reverse'>
                <Grid item xs='auto'>
                    <Button variant="contained" onClick={() => setOpen(true)}>
                        Add Contact
                    </Button>
                </Grid>
            </Grid>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Grid container sx={style} spacing={1}>
                    <Grid item>
                        <Typography variant="h6" component="h2" fontWeight='bold'>
                            Add Contact
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            size="small"
                            variant="standard"
                            fullWidth
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Address"
                            size="small"
                            variant="standard"
                            fullWidth
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Phone Number"
                            size="small"
                            variant="standard"
                            fullWidth
                            value={pnumber}
                            onChange={e => setPnumber(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs='auto' mt={2} mx='auto'>
                        <Button onClick={addContact} variant="contained" size='small'>
                            Add
                        </Button>
                        <Button color='warning' onClick={() => clearInputs()} variant="contained" size='small'>
                            Reset
                        </Button>
                        <Button color='error' onClick={() => setOpen(false)} variant="contained" size='small'>
                            Close
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </Fragment>
    );
}

export default AddContact;