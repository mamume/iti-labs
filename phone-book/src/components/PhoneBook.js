import { useState } from 'react';
import nextId from 'react-id-generator'


function PhoneBook() {
    const [contacts, setContacts] = useState([
        {
            id: nextId(),
            name: 'Mahmoud',
            Address: 'Add1',
            pnumber: '0100200300'
        },
        {
            id: nextId(),
            name: 'Mustafa',
            Address: 'Add2',
            pnumber: '0100400500'
        },
        {
            id: nextId(),
            name: 'Metwally',
            Address: 'Add2',
            pnumber: '0100600700'
        }
    ])

    return ('Hello, World!');
}

export default PhoneBook;