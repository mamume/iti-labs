import React, { useEffect, useState } from 'react';
import { TextField, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';


function Search(props) {
    const [query, setQuery] = useState('')
    const [searchType, setSearchType] = useState('')

    // function querySearch(e) {
    //     setQuery(e.target.value)
    // }

    useEffect(() => {
        props.querySearch(query.toLowerCase(), searchType)
    }, [query, searchType])

    return (
        <Grid container justifyContent='space-around' mb={3}>
            <Grid item xs={5}>
                <TextField
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    size="small"
                    fullWidth
                    label="Search"
                    variant="standard"
                />
            </Grid>
            <Grid item xs={4}>
                <FormControl variant="standard" fullWidth>

                    <InputLabel id='input-label'>Type</InputLabel>
                    <Select

                        value={searchType}
                        labelId="input-label"
                        label='Type'
                        onChange={(e) => setSearchType(e.target.value)}
                        size='small'
                    >
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="address">Address</MenuItem>
                        <MenuItem value="pnumber">Phone Number</MenuItem>
                    </Select>
                </FormControl>

            </Grid>

        </Grid >
    );
}

export default Search;