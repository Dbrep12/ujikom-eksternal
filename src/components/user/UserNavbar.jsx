import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = () => {
    return (
        <div>
            <nav>
                <h1>Resto<span>Enak</span></h1>
                <ul>
                    <li><Link to='/user'>Home</Link></li>
                    <li><Link to='/usermenu'>Menu</Link></li>
                    <li><Link to='/usercontact'>Contact</Link></li>
                    <li><Link to='/login'>Logout</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default UserNavbar