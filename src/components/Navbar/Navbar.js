import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid ms-3 py-2">
                    <div>
                        <i className="fas fa-pencil-ruler text-white fs-2 me-3"></i>
                    </div>
                    <h2 className="text-white">Drawspace</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav fw-bold ms-auto mb-2 mb-lg-0 me-3">
                            <li className="nav-item px-4">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link" to="/Services">Our Services</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item px-4">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >
        </>
    );
};

export default Navbar;