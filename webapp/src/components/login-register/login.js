import { useState } from "react";
import LoginBtn from "./LoginBtn";
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [token, setToken] = useState('')
    const [message, setMessage] = useState('')

    // "email": "eve.holt@reqres.in",
    // "password": "cityslicka"

    function handleLogin(e) {
        e.preventDefault()

        if (!email)
            setMessage('Email is required!')
        else if (!password)
            setMessage('Password is required!')
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
            setMessage('Invalid Email!')
        else
            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            })
                .then(request => request.json())
                .then(data => {
                    if (data.error)
                        setMessage(data.error)
                    else
                        setMessage(`Login is Successful. Token: ${data.token}`)
                })
    }


    return (
        // Login Form
        <form className="p-4 border mx-auto mt-lg-5 rounded container w-50">
            {/* Alert Message Div */}
            {message &&
                <div id='alert-message' className="text-center alert alert-primary" role="alert">
                    {message}
                </div>}

            {/* Login by Facebook or Google buttons */}
            <div className="d-grid gap-2">
                <LoginBtn name="Facebook" color="#297BE5" />
                <LoginBtn name="Twitter" color="#1C9CEA" />
                <LoginBtn name="Google" color="#34A853" />
            </div>

            <div className="form-text text-center mt-3">OR</div>

            {/* Login Fields */}
            <div className="my-2">
                <label htmlFor="email" className="form-label">Email address</label>
                <input id="email" type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input id="password" type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="checkbox" />
                <label className="form-check-label" htmlFor="checkbox">Remember Me</label>
            </div>
            <button type="submit" className="btn btn-primary w-100" id='submit-btn' onClick={handleLogin}>Submit</button>

            <div className="form-text mt-lg-3">
                No account yet? <Link to="/Register">Register Here</Link>
            </div>
        </form>
    );
}

export default Login;