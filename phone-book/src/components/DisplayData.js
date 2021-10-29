import React from 'react';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';


function DisplayData(props) {
    const { contacts } = props
    const conlumns = [
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'address', headerName: 'Address', width: 170 },
        { field: 'pnumber', headerName: 'Phone Number', width: 200 }
    ]

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={contacts}
                columns={conlumns}
                disableColumnFilter
                disableColumnMenu
                autoPageSize
                disableSelectionOnClick
            />
        </div>
    );
}

export default DisplayData;