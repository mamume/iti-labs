function addToDB(db) {
    const id = document.querySelector('#id')
    const name = document.querySelector('#name')
    const amount = document.querySelector('#amount')

    // console.log(id.value, name, amount)
    // console.log(db)
    db.transaction(function (tx) {
        tx.executeSql(`
            INSERT INTO items
            VALUES ('${id.value}', '${name.value}', ${parseInt(amount.value)})
        `);
    })
}

function initializeDB() {
    const db = openDatabase('onlinestore', '1.0', 'Online Store Database', 2 * 1024 * 1024)

    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS items (id unique, name varchar(40), amount int)');
    })

    return db
}

document.addEventListener('DOMContentLoaded', () => {
    db = initializeDB()

    const submit = document.querySelector('#submit')
    submit.addEventListener('click', () => addToDB(db))
})