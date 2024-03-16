import React from 'react';
import './Navbar.css';
import logo from './../../logo.png';
import search from './../../search.svg';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
        <nav>
            <div className='nav'>
            <div className="navbar-container col-12  col-lg-10 col-md-10" >
                <div className="col-12  col-lg-2 col-md-2 logo" >
                    <a href=""><img src={logo} alt="Logo" className="logoimg" /></a>
                </div>
            <div className="navigation">
                <div className="col-12 col-lg-8 col-md-8">
                <div className="col-12 col-lg-5 col-md-5">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4 nav-right">
                         <div className='nav-search-button '>
                            <img src={search}></img>
                        </div>

                        <div className='callButton'>
                           <a  className='button'>Schedule a Call</a>
                             </div>
                </div>
                </div>
                </div>
                </div>
        </nav>
    );
}

export default Navbar;