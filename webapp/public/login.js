function login(e) {
    e.preventDefault()

    // Get email from email field
    const email = $('#email');
    // Get password from password field
    const password = $('#password');

    // Select alert div
    const alertMessage = $('#alert-message');

    // Check if email is empty
    if (!email.val()) {
        alertMessage.text('Email is required!');
        alertMessage.css("color", 'red');
    }
    // check if password is empty
    else if (!password.val()) {
        alertMessage.text('Password is required!');
        alertMessage.css('color', 'red');
    }
    // Email validation source 'https://www.w3resource.com/javascript/form/email-validation.php'
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())) {
        alertMessage.text('Email is invalid!');
        alertMessage.css('color', 'red');
    }
}

$(() => {
    // Trigger login function on submit button click
    $('#submit-btn').on('click', login);
})