import React from "react";
import { Link } from 'react-router-dom';
import triviaLogoImage from '../images/triviaLogo.png'

const TriviaComponent = () => {
   
    const triviaIntroText = {
        color: "white",
        fontSize: "30px",
        fontFamily: 'Arial, sans-serif',
        textAlign:"center",
        backgroundImage: 'linear-gradient(to right, purple, orange, purple)',
        padding:"4px",
        borderRadius: '10px',
        fontWeight:'bold'
    }
    const triviaLinkButtonContainer = {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        
    }
    const triviaSubjectButtonStyle = {
        width: '200px',
        height: '80px',
        backgroundColor: 'rgb(189, 0, 139)',
        cursor: 'pointer',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '30px',

    }
    const triviaIntroContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        padding: "10px",
        
    }
    const imageContainer = {
        width: '1300px', 
        height: '200px', 
        backgroundImage: `url(${triviaLogoImage})`,
        backgroundSize: 'cover',
        borderRadius: 15,
        border: "10px solid rgb(189, 0, 139)",
        marginBottom: '15px'
    }
   
const largestContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        gap: 20
}

    return (
        <div style={largestContainer}>

                <div style={{ triviaIntroContainer }}>
                    <div style={imageContainer}></div>
                    
                    <div style={triviaIntroText}>Please Select Your Subject of Interest:</div>
                </div>

                <div style={triviaLinkButtonContainer}>
                    <button style={triviaSubjectButtonStyle}><Link to="/art" style={{ textDecoration: 'none', color: 'white' }}>ART</Link></button>
                    <button style={triviaSubjectButtonStyle}><Link to="/history" style={{ textDecoration: 'none', color: 'white' }}>HISTORY</Link></button>
                    <button style={triviaSubjectButtonStyle}><Link to="/science" style={{ textDecoration: 'none', color: 'white' }}>SCIENCE</Link></button>
                </div>


            
        </div>
    );
};

export default TriviaComponent;
