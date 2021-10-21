import React from 'react';
import { Link } from 'react-router-dom';

const NavbarOne = () => {
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <ul className="right">
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/EmpData">EmpData </Link></li>
                    <li><Link to="/UserData">UserData </Link></li>
                    <li><Link to="/ApiData">ApiData </Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarOne;
