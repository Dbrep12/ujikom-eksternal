import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <h1>Resto<span>Enak</span></h1>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/create'>Create</Link></li>
                    <li><Link to='/login'>Logout</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar