import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navBarStyle = {
    backgroundColor: 'purple', // Set the background color
    color: 'white',          // Set the text color
    padding: '2px',         // Add padding for spacing
    textAlign: 'center',     // Center the text
    position: 'fixed',       // Set the position to fixed
    width: '100%',           // Take up the full width of the viewport
    top: 0,                  // Stick to the top of the viewport
    zIndex: 1000,            // Set a high z-index to ensure it's above other elements
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
        <li style={listItemStyle}><Link to="/facts" style={linkStyle}>Facts</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
