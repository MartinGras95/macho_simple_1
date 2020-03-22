import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import "../styles/global.css"

import navbarStyles from '../styles/navbar.module.scss'

import { Link, animateScroll as scroll } from 'react-scroll'



const Navibar = () => {
    return (
        <Navbar sticky="top" variant="dark" className="primary-color">
            <Navbar.Brand className={navbarStyles.brand} onClick={() =>
            scroll.scrollToTop()}>Company Name</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() =>
                    scroll.scrollToTop()}>Home</Nav.Link>
                <Nav.Link><Link to='aboutsection'smooth={true} offset={-50} duration={1000}>About</Link></Nav.Link>
                <Nav.Link><Link to='footer'smooth={true} offset={-50} duration={1000}>Contact</Link></Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navibar