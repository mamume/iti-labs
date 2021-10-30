import React, { Fragment } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid'
import DeleteIcon from '@mui/icons-material/Delete';

function DisplayData(props) {
    const { contacts, deleteContact } = props
    // const conlumns = [
    //     { field: 'name', headerName: 'Name', width: 160 },
    //     { field: 'address', headerName: 'Address', width: 160 },
    //     { field: 'pnumber', headerName: 'Phone Number', width: 170 },
    // ]

    // console.log(contacts)

    return (
        // <div style={{ height: 400, width: '100%' }}>
        //     <DataGrid
        //         rows={contacts}
        //         columns={conlumns}
        //         disableColumnFilter
        //         disableColumnMenu
        //         autoPageSize
        //         disableSelectionOnClick
        //     />
        // </div>

        <Grid container spacing={2}>
            <Grid item xs={4} fontWeight='bold'>
                Name
            </Grid>
            <Grid item xs={3} fontWeight='bold'>
                Address
            </Grid>
            <Grid item xs={4} fontWeight='bold'>
                Phone Number
            </Grid>

            {contacts.map(contact => (
                <Fragment key={contact.id}>
                    <Grid item xs={4}>
                        {contact.name}
                    </Grid>
                    <Grid item xs={3}>
                        {contact.address}
                    </Grid>
                    <Grid item xs={4}>
                        {contact.pnumber}
                    </Grid>
                    <Grid item xs={1}>
                        <DeleteIcon
                            color='error'
                            onClick={() => deleteContact(contact.id)}
                        />
                    </Grid>
                </Fragment>
            ))}
        </Grid>
    );
}

export default DisplayData;