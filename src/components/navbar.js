import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import "../styles/global.css"

import navbarStyles from '../styles/navbar.module.scss'

import { Link, animateScroll as scroll } from 'react-scroll'



const Navibar = () => {
    return (
        <Navbar sticky="top" variant="dark" expand="sm" className="primary-color">
            <Navbar.Brand className={navbarStyles.brand} onClick={() =>
            scroll.scrollToTop()}>Company Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link onClick={() =>
                    scroll.scrollToTop()}>Home</Nav.Link>
                <Link className={navbarStyles.link} to='aboutsection'smooth={true} offset={-50} duration={1000}><Nav.Link>About</Nav.Link></Link>
                <Link className={navbarStyles.link} to='footer'smooth={true} offset={-50} duration={1000}><Nav.Link>Contact</Nav.Link></Link>
            
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar