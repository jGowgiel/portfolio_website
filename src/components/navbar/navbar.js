
import React from 'react';

import './navbar.css';

import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to='/' className="navbar-brand">Jarod Gowgiel</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='programming' className="nav-link">Programming</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='fabrication' className="nav-link">Fabrication</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='resume' className="nav-link">Resume</Link>
                        </li>
                    </ul>
                </div>

                <div className="pull-right">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to='contact' className="btn btn-light">Contact</Link>
                        </li>
                    </ul>     
                </div>

            </nav>
        );
    }
}


export default Navbar;
