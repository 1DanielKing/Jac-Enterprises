import React from 'react';
import signWhiteImage from '../images/signwhite.png'


const NavBar = () => {


    const navBarContainer = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        background: 'linear-gradient(to right, black, purple, red ,orange, yellow, orange, red, purple, black)',
        height: '7%',
        position: 'fixed',
        width: '100vw',
        top: 10,
        zIndex: 1000,
    }

    const linkContainer = {
        width: "25vw",
        display: "flex",
        justifyContent: "space-evenly",
        textAlign: "center",
        fontSize: '20px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
    }

    const linkStyle = {
        textDecoration: 'none', 
        color: 'white',
        margin: '20px 10px', 
      }

    const mysteryEducatorStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (

        <div style={navBarContainer}>
            <nav>
                <div style={mysteryEducatorStyle}>
                    <img img src={signWhiteImage} width="300px" alt="" srcset="" />
                </div>

            </nav>
            <div style={linkContainer}>
            <a href="/" style={linkStyle}>HOME</a>
            <a href="/#section6" style={linkStyle}>ABOUT</a>
            <a href="/#section6" style={linkStyle}>CONTACT</a>
            </div>
        </div>

    )

}

export default NavBar;
