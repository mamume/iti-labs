let username = prompt("Enter username:")
let password = prompt("Enter password:")

if (username === 'admin' && password === '421$$')
    alert('Welcome login success')
else if (username !== 'admin' && password !== '421$$')
    alert('Username and Password are wrong')
else if (username !== 'admin')
    alert('Username is wrong')
else
    alert('Password is wrong')