import { useState } from 'react';
import nextId from 'react-id-generator'
import Container from '@mui/material/Container';
import DisplayData from './DisplayData'

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
            <DisplayData contacts={contacts} />
        </Container>
    );
}

export default PhoneBook;