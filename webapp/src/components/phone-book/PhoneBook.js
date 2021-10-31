import { useState } from 'react';
import nextId from 'react-id-generator'
import Container from '@mui/material/Container';
import DisplayData from './DisplayData'
import Div from '@mui/material/Divider'
import AddContact from './AddContact';
import Search from './Search';

function PhoneBook() {
    const [contacts, setContacts] = useState([
        {
            id: nextId(),
            name: 'Mahmoud',
            address: 'Addr1',
            pnumber: '0100200300'
        },
        {
            id: nextId(),
            name: 'Mustafa',
            address: 'Addr2',
            pnumber: '0100400500'
        },
        {
            id: nextId(),
            name: 'Metwally',
            address: 'Addr3',
            pnumber: '0100600700'
        }
    ])
    const [searchResult, setSearchResult] = useState(contacts)
    const [search, setSearch] = useState(false)


    function deleteContact(id) {
        setContacts(contacts => contacts.filter(contact => contact.id !== id))
        setSearch(false)
    }

    function addContact(contact) {
        contact.id = nextId()

        setContacts(contacts => contacts.concat(contact))
        setSearch(false)
    }

    function querySearch(query, searchType) {
        if (query === '' || searchType === '')
            setSearch(false)
        else {
            setSearch(true)
            switch (searchType) {
                case 'name':
                    setSearchResult(contacts.filter(contact => contact.name.toLowerCase().includes(query)))
                    break
                case 'address':
                    setSearchResult(contacts.filter(contact => contact.address.toLowerCase().includes(query)))
                    break
                case 'pnumber':
                    setSearchResult(contacts.filter(contact => contact.pnumber.includes(query)))
                    break
                default:
                    return
            }
        }
    }

    return (
        <Container maxWidth="sm">
            <Div><h1>Phone Book</h1></Div>
            <Search querySearch={querySearch} />
            <DisplayData
                contacts={search ? searchResult : contacts}
                deleteContact={deleteContact}
            />
            <AddContact addContact={addContact} />
        </Container>
    );
}

export default PhoneBook;