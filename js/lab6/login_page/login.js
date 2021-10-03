function login() {
    // Get email from email field
    const email = document.querySelector('#email');
    // Get password from password field
    const password = document.querySelector('#password');

    // Select alert div
    const alertMessage = document.querySelector('#alert-message');

    // Check if email is empty
    if (!email.value) {
        alertMessage.innerText = 'Email is required!';
        alertMessage.style.color = 'red';
    }
    // check if password is empty
    else if (!password.value) {
        alertMessage.innerText = 'Password is required!';
        alertMessage.style.color = 'red';
    }
    // Email validation source 'https://www.w3resource.com/javascript/form/email-validation.php'
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        alertMessage.innerText = 'Email is invalid!';
        alertMessage.style.color = 'red';
    }
    // If email and password is valid
    else {
        // Create request body
        payload = {
            "email": email.value,
            "password": password.value
        };

        // Fetch login api
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(response => response.json())
            .then(data => {
                // Check if token is found (login is succeeded)
                if (data.token) {
                    // Display success message
                    alertMessage.innerHTML = 'Successful Login!';
                    alertMessage.style.color = 'green';
                    // Redirect to fetch page
                    setTimeout(() => (location.href = '../fetch/index.html'), 3000);
                }
                // If login not succeeded, display error
                else {
                    alertMessage.style.color = 'red';
                    alertMessage.innerHTML = data.error;
                }
            });
    }
}

// After DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add an event listener on login button to run login function
    document.querySelector('button').addEventListener('click', login);
});