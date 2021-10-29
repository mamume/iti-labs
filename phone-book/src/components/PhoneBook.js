import { useState } from 'react';
import nextId from 'react-id-generator'
import Container from '@mui/material/Container';
import DisplayData from './DisplayData'
import Div from '@mui/material/Divider'

function PhoneBook() {
    const [contacts, setContacts] = useState([
        {
            id: nextId(),
            name: 'Mahmoud',
            address: 'Add1',
            pnumber: '0100200300'
        },
        {
            id: nextId(),
            name: 'Mustafa',
            address: 'Add2',
            pnumber: '0100400500'
        },
        {
            id: nextId(),
            name: 'Metwally',
            address: 'Add2',
            pnumber: '0100600700'
        }
    ])

    return (
        <Container maxWidth="sm">
            <Div><h1>Phone Book</h1></Div>
            <DisplayData contacts={contacts} />
        </Container>
    );
}

export default PhoneBook;