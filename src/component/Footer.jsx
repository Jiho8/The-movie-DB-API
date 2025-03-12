import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <h2>
            <NavLink to='/'>HFLIX</NavLink>
        </h2>
        <div className='footerBox'>
            <div className='footerMenu'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Contact Us</NavLink>
            <NavLink to='/'>Term of Services</NavLink>
            <NavLink to='/'>About Us</NavLink>
            </div>
            <div className='footerMenu'>
            <NavLink to='/'>Live</NavLink>
            <NavLink to='/'>FAQ</NavLink>
            <NavLink to='/'>Premium</NavLink>
            <NavLink to='/'>Privacy Policy</NavLink>
            </div>
            <div className='footerMenu'>
            <NavLink to='/'>You Must Watch</NavLink>
            <NavLink to='/'>Recent Release</NavLink>
            <NavLink to='/'>Top IMDB</NavLink>
            </div>
        </div>
    </footer>
  )
}

export default Footer