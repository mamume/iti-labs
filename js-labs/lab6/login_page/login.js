function login() {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    const alertMessage = document.querySelector('#alert-message');

    // if (username.value === 'admin' && password.value === '123') {
    //     document.querySelector('#header').innerText = 'Logged In';
    //     document.querySelector('table').hidden = true;
    // } else {
    //     document.querySelector('#alert-message').innerText = 'Not Registered';
    //     username.value = '';
    //     password.value = '';
    // }

    console.log(email.value, password.value);

    if (!email.value) {
        alertMessage.innerText = 'Email is required!';
        alertMessage.style.color = 'red';
    }
    else if (!password.value) {
        alertMessage.innerText = 'Password is required!';
        alertMessage.style.color = 'red';
    }
    // Email validation source 'https://www.w3resource.com/javascript/form/email-validation.php'
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        alertMessage.innerText = 'Email is invalid!';
        alertMessage.style.color = 'red';
    }
    else {
        payload = {
            "email": email.value,
            "password": password.value
        };

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(response => response.json())
            .then(data => {
                if (data.token) {
                    alertMessage.innerHTML = 'Successful Login!';
                    alertMessage.style.color = 'green';
                }
                else {
                    alertMessage.style.color = 'red';
                    alertMessage.innerHTML = data.error;
                }
            });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', login);
});