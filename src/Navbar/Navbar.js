import React from "react";
import './Navbar.css'

import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <main>
            <nav>
                <ul>
                    <li><Link className="a" to='/'>Home</Link></li>
                    <li><Link className="a" to='/about'>About</Link></li>
                    <li><Link className="a" to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </main>
    )
}
export default Navbar;