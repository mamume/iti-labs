import React from 'react';
import NavItem from './NavItem';

function Nav() {
    return (
        // Navigation Bar
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-spa">
            <div className="container-fluid">
                <a className="navbar-brand active" href="./index.html">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavItem href="#todo" title="ToDo" />
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