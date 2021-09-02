function login() {
    const username = document.querySelector('#username')
    const password = document.querySelector('#password')

    if (username.value === 'admin' && password.value === '123') {
        document.querySelector('#alert-message').innerText = 'Logged In'
        document.querySelector('table').hidden = true
    } else {
        document.querySelector('#alert-message').innerText = 'Not Registered'
        username.value = ''
        password.value = ''
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', login)
})