function login() {
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    if (username === 'admin' && password === '123') {
        document.querySelector('#alert-message').innerText = 'Welcome'
        document.querySelector('table').hidden = true
    } else {
        document.querySelector('#alert-message').innerText = 'Not Registered'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', login)
})