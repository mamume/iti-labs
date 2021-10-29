import React from 'react';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';


function DisplayData(props) {
    const { contacts } = props

    return (
        <Grid container justifyContent={'center'} >
            <Grid item xs={3}>
                Name
            </Grid>
            <Grid item xs={3}>
                Name
            </Grid>
            <Grid item xs={3}>
                Name
            </Grid>
            <Grid item xs={3}>
                Name
            </Grid>
        </Grid >
    );
}

export default DisplayData;