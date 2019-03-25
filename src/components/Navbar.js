import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <header>
        <h1>Weather App</h1>
        <NavLink to="/">Weather</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/help">Help</NavLink>
    </header>
)

export default Navbar