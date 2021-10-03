// Phonebook App
// Get operation from user (add, search)
// if add: 
//  Get contact name and phone number
//  Create contact object and add it to contacts array
// if search
//  Get contact name or phone number to search
//  show the matched contact name and phone number
// ask for repeat or exit


// create contacts array
// create createContact(name, phone) function, returns new contact object
// create search(contacts) function
//  search for name or phone number in contacts
//  return the found contact or Not found
// do..while loop to run the applcation.


function createContact() {
    let name = prompt("Enter the Contact Name:")
    let phone = prompt("Enter the Phone number:")

    return {
        name,
        phone
    }
}


function search(contactArr) {
    let found = false
    input = prompt("Enter name or phone number:")

    contactArr.forEach(contact => {
        if (contact.name === input || contact.phone === input) {
            found = true
            alert(`
                Contact is found:
                    Name: ${contact.name}
                    Phone Number: ${contact.phone}
             `)
        }
    })

    if (!found)
        alert('Contact not found')
}

let contacts = []
let op

do {
    op = prompt("Enter Operation (add, search) or Cancel of exit:")

    switch (op) {
        case 'add':
            contacts.push(createContact())
            break
        case 'search':
            search(contacts)
            break
        case null:
            alert('Closing App...')
            break
        default:
            alert('Invalid Operation')
    }
} while (op)