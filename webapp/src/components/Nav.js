import React, { Fragment } from 'react';
import NavItem from './NavItem';


function Nav(props) {
    function logout() {
        props.setAuthedUser(false)
    }

    return (
        // Navigation Bar
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-spa">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {props.authedUser
                            ? <Fragment>
                                <li className="nav-item">
                                    <NavItem title="ToDo" />
                                </li>
                                <li className="nav-item">
                                    <NavItem title="Phone Book" />
                                </li>
                                <li className="nav-item" onClick={logout}>
                                    <NavItem title="Logout" />
                                </li>
                            </Fragment>
                            : <Fragment>
                                <li className="nav-item">
                                    <NavItem title="Login" />
                                </li>
                                <li className="nav-item">
                                    <NavItem title="Register" />
                                </li>
                            </Fragment>}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;