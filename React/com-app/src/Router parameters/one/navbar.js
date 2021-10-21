import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-6">
            <div className="container">
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/api">Api</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;