import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <Link to="/">Home </Link>
                <Link to="/review"> OderReview </Link>
                <Link to="/">About </Link>
                <Link to="/">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;