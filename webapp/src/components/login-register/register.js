import { Fragment } from "react";
import LoginBtn from "./LoginBtn";

function Register() {
    return (
        <Fragment>
            <h3 className="text-center mt-sm-4 mb-4">Create Your Account</h3>

            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td className="px-5 w-50 border-end">
                            {/* <!-- Alert Message Div --> */}
                            <div id='alert-message' className="text-center p-0 m-0" style={{ color: 'red' }}>
                                {/* <!-- message --> */}
                            </div>

                            {/* <!-- Signup Fields --> */}
                            <form className="w-75 mx-auto mt-lg-3 rounded">
                                <div className="my-1">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" />
                                </div>

                                <div className="my-1">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirm-password" />
                                </div>
                                <div className="mb-2 form-check">
                                    <input type="checkbox" className="form-check-input" id="accept-terms" />
                                    <label className="form-check-label" htmlFor="accept-terms">
                                        By using our service you are accepting our terms of use
                                    </label>
                                </div>
                                <button id='submit-btn' type="submit" className="btn btn-primary w-100">Continue</button>
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
            </table>
        </Fragment>
    );
}

export default Register;