import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    

    const navBarStyle = {
        backgroundColor: 'purple', // Set the background color
        color: 'white',          // Set the text color
        padding: '15px',         // Add padding for spacing
        textAlign: 'center',     // Center the text
    };

    const listItemStyle = {
        display: 'inline-block',  // Display list items horizontally
        marginRight: '20px',      // Add margin between list items
    };

    const linkStyle = {
        textDecoration: 'none',   // Remove underlines from links
        color: 'white',           // Set link color
        fontWeight: 'bold',       // Make links bold
        fontSize: '18px',         // Set link font size
    };


    return (
        <nav style={navBarStyle}>
            <ul>
                <li style={listItemStyle}><Link to="/" style={linkStyle}>Home</Link></li>
                <li style={listItemStyle}><Link to="/trivia" style={linkStyle}>Trivia</Link></li>
                <li style={listItemStyle}><Link to="/rps" style={linkStyle}>RPS</Link></li>
                <li style={listItemStyle}><Link to="/wordguesser" style={linkStyle}>Word Guesser</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
