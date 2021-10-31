import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';


function Nav() {
    return (
        // Navigation Bar
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-spa">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <Link to='/todo'> */}
                            <NavItem title="ToDo" />
                            {/* </Link> */}
                        </li>
                        <li className="nav-item">
                            <NavItem href="#phone-book" title="Phone Book" />
                        </li>
                        <li className="nav-item">
                            <NavItem href="./login.html" title="Login" />
                        </li>
                        <li className="nav-item">
                            <NavItem href="./register.html" title="Register" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;