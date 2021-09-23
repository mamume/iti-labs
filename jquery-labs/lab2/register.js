// Redirect to homepage
function redirectToHome() {
    window.location.replace("./index.html");
}

// Handle login
function login(e) {
    e.preventDefault()

    // Select data field
    const username = $('#username')
    const email = $('#email')
    const password = $('#password')
    const confirmPassword = $('#confirm-password')
    const acceptTerms = $('#accept-terms')
    const alertMsg = $('#alert-message')

    // If any field is empty alert
    if (!username.val() || !email.val() || !password.val() || !confirmPassword.val())
        alertMsg.text('All Fields are required')
    // Email Validation
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val()))
        alertMsg.text('Email is invalid!')
    // Check for password matching
    else if (password.val() !== confirmPassword.val())
        alertMsg.text("Passwords don't match!")
    // Check for accepting terms
    else if (!acceptTerms.is(':checked'))
        alertMsg.text("You must accept our terms!")
    // All is good, redirect to homepage
    else
        redirectToHome()
}

// Trigger after loading DOM
$(() => {
    // On submit run login function
    $('#submit-btn').on('click', login)

    // Redirect To home if signed with a social account
    $('.signup-btn').each((index, btn) => $(btn).on('click', redirectToHome))
})