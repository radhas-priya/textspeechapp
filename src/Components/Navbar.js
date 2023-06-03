import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/About">About</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
