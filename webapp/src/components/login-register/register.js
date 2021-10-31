import { Fragment } from "react";
import LoginBtn from "./LoginBtn";

function Register() {
    return (
        <Fragment>
            <h3 class="text-center mt-sm-4 mb-4">Create Your Account</h3>

            <table class="table table-borderless">
                <tr>
                    <td class="px-5 w-50 border-end">
                        {/* <!-- Alert Message Div --> */}
                        <div id='alert-message' class="text-center p-0 m-0" style={{ color: 'red' }}>
                            {/* <!-- message --> */}
                        </div>

                        {/* <!-- Signup Fields --> */}
                        <form class="w-75 mx-auto mt-lg-3 rounded">
                            <div class="my-1">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username" />
                            </div>

                            <div class="my-1">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-1">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" />
                            </div>
                            <div class="mb-1">
                                <label for="confirm-password" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="confirm-password" />
                            </div>
                            <div class="mb-2 form-check">
                                <input type="checkbox" class="form-check-input" id="accept-terms" />
                                <label class="form-check-label" for="accept-terms">
                                    By using our service you are accepting our terms of use
                                </label>
                            </div>
                            <button id='submit-btn' type="submit" class="btn btn-primary w-100">Continue</button>
                        </form>
                    </td>


                    {/* <!-- Signup using Facebook, Twitter or Google buttons --> */}
                    <td class="px-5 w-50">
                        <div class="font-weight-bold">
                            <b>Sign up with one of your social accounts</b>
                        </div>
                        <div class="d-grid gap-2 mt-lg-3 w-75">
                            <LoginBtn name="Facebook" color="#297BE5" />
                            <LoginBtn name="Twitter" color="#1C9CEA" />
                            <LoginBtn name="Google" color="#34A853" />
                        </div>
                    </td>
                </tr>
            </table>
        </Fragment>
    );
}

export default Register;