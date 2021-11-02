import { Fragment, useEffect, useState } from "react";
import { Redirect } from "react-router";
import LoginBtn from "./LoginBtn";

function Register(props) {
    const [registerData, setRegisterData] = useState({
        username: '',
        password: '',
        email: '',
        confirmPassword: '',
        acceptTerms: false
    })

    const [alertMessage, setAlertMessage] = useState('')
    const [ValidData, setValidData] = useState(false)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        if (registerData.password
            && registerData.confirmPassword
            && registerData.password !== registerData.confirmPassword) {
            setAlertMessage("Passwords don't match")
            setValidData(false)
        }
        else {
            setAlertMessage('')
            setValidData(true)
        }
    }, [registerData.confirmPassword, registerData.password])

    useEffect(() => {
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(registerData.email) && registerData.email) {
            setAlertMessage('Invaild Email!')
            setValidData(false)
        } else
            setAlertMessage('')
        setValidData(true)
    }, [registerData.email])

    function register(e) {
        e.preventDefault()
        const { username, email, password, confirmPassword, acceptTerms } = registerData

        if (!(username && email && password && confirmPassword))
            setAlertMessage('All Fields are required!')
        else if (!ValidData)
            return
        else if (!acceptTerms)
            setAlertMessage('You must accept our terms!')
        else {
            setAlertMessage('Register Succeeded!')
            props.setAuthedUser(true)
            setRedirect(true)
        }
    }

    return (
        <Fragment>
            <h3 className="text-center mt-sm-4 mb-4">Create Your Account</h3>
            {redirect || props.authedUser
                ? <Redirect to='/Todo' />
                : <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <td className="px-5 w-50 border-end">
                                {alertMessage &&
                                    < div id='alert-message' className="text-center alert alert-primary" role="alert">
                                        {/* <!-- message --> */}
                                        {alertMessage}
                                    </div>}

                                {/* <!-- Signup Fields --> */}
                                <form className="w-75 mx-auto mt-lg-3 rounded">
                                    <div className="my-1">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" className="form-control" id="username" value={registerData.username}
                                            onChange={e => setRegisterData({
                                                ...registerData,
                                                username: e.target.value
                                            })}
                                        />
                                    </div>

                                    <div className="my-1">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" value={registerData.email}
                                            onChange={e => {
                                                setRegisterData({
                                                    ...registerData,
                                                    email: e.target.value
                                                })
                                            }}
                                            aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" value={registerData.password}
                                            onChange={e => setRegisterData({
                                                ...registerData,
                                                password: e.target.value
                                            })} />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="confirm-password" value={registerData.confirmPassword}
                                            onChange={e => {
                                                setRegisterData({
                                                    ...registerData,
                                                    confirmPassword: e.target.value
                                                })
                                            }} />
                                    </div>
                                    <div className="mb-2 form-check">
                                        <input type="checkbox" className="form-check-input" id="accept-terms"
                                            onChange={() => (
                                                setRegisterData({
                                                    ...registerData,
                                                    acceptTerms: !registerData.acceptTerms
                                                })
                                            )} />
                                        <label className="form-check-label" htmlFor="accept-terms">
                                            By using our service you are accepting our terms of use
                                        </label>
                                    </div>
                                    <button id='submit-btn' type="submit" className="btn btn-primary w-100" onClick={register}>Register</button>
                                </form>
                            </td>


                            {/* <!-- Signup using Facebook, Twitter or Google buttons --> */}
                            <td className="px-5 w-50">
                                <div className="font-weight-bold">
                                    <b>Sign up with one of your social accounts</b>
                                </div>
                                <div className="d-grid gap-2 mt-lg-3 w-75">
                                    <LoginBtn name="Facebook" color="#297BE5" />
                                    <LoginBtn name="Twitter" color="#1C9CEA" />
                                    <LoginBtn name="Google" color="#34A853" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>}
        </Fragment >
    );
}

export default Register;