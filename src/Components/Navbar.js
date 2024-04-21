import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg " id="navbar-id">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link className="nav-link active nav-item"  id="nav-link-id"
                             aria-current="page" to="/">Listen</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
