import React from 'react'
import { Link } from 'react-router-dom'; 
function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">React POC</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link className="nav-item active" to="/">
                            <li className="nav-link">Home <span className="sr-only">(current)</span></li>
                        </Link>
                        <Link className="nav-item" to="/login">
                            <li className="nav-link">Login</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
