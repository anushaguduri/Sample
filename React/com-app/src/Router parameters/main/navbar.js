import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/employeedata">EmployeeData</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;