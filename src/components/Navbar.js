import React from 'react' 
import { NavLink } from 'react-router-dom' 
import '../static/styles/Navbar.css' 

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink to="/"> Home </NavLink>
        </nav>
    )
}

export default Navbar