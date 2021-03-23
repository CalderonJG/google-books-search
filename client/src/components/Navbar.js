import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#7a5cff'}}>
            <div className="container">
                <Link className="navbar-brand" to="/">Search Books</Link>
                <Link className="navbar-brand" to="/saved">Saved Books</Link>
            </div>
        </nav>
    )
}

export default Navbar;
