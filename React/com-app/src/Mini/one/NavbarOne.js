import React from 'react';
import { Link } from 'react-router-dom';

const NavbarOne = () => {
    return (
 
<nav className="nav-wrapper yellow darken-4">
    <div className="container">
        <ul className="right">
            <li><Link to="/">Home </Link></li>
            <li><Link to="/ContactUs">ContactUs </Link></li>
            <li><Link to="/SignUp">SignUp </Link></li>
        </ul>
    </div>
</nav>
    )
}

export default NavbarOne;
