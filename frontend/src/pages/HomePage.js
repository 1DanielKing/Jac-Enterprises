import React from "react";
import RPSComponent from "../components/RPSComponent";
import TriviaPage from "./TriviaPage";
import WordGuesserComponent from "../components/WordGuesserComponent";
import kingimage from '../images/king.png'
import ortizimage from '../images/ortiz.png'
import sotoimage from '../images/soto.png'
import jacksonimage from '../images/jackson.png'
import rogersimage from '../images/rogers.png'



const HomePage = () => {
    const sectionStyle = {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: '#add8e6',
        marginTop: "20px", // Adjust the marginTop value to bring the section closer to the top
      };

  const horizontalContainersStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "40px", 
    padding: "20px",    
    height: "250px",  
   
  };

  const containerItemStyle = {
    flex: 1,
    backgroundColor: "#ddd",
    border: "1px solid #999",
    padding: "20px",
    margin: "0 40px",
    height: "100%",     // Set height to 100% to match the height of the horizontal containers
    width: "250px",     // Adjust the width to make the containers wider
    borderRadius: 15, 
  };

  const placeholderBoxStyle = {
    width: "300px",
    height: "200px",
    backgroundColor: "#ddd", 
    border: "1px solid #999",
    padding: "20px",
    margin: "20px",
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const aboutContainerStyle = {
    ...containerItemStyle,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
    width: "90vw",
  };

  const personContainerStyle = {
    backgroundColor: "#ddd",
    border: "1px solid #999",
    
    
    width: "15vw",
    borderRadius: 15,
  };

  return (
    <div> 
        <section style={{ ...sectionStyle, backgroundColor: '#add8e6' }} id="section1"> 
        <div className="container">
          <h1>Welcome to Mystery Educator!</h1>
          <p>Home of Children's education & entertainment</p>

          {/* Three evenly spaced containers */}
          <div style={horizontalContainersStyle}>
            <div
              style={containerItemStyle}
              onClick={() => scrollToSection("section2")}
            >
              <p>Container 1</p>
            </div>
            <div
              style={containerItemStyle}
              onClick={() => scrollToSection("section5")}
            >
              <p>Container 2</p>
            </div>
            <div
              style={containerItemStyle}
              onClick={() => scrollToSection("section6")}
            >
              <p>Container 3</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, backgroundColor: 'yellow' }} id="section2">
        <div className="container">
        <RPSComponent />
          <div style={placeholderBoxStyle}>
            <p>Content for Section 2</p>
          </div>
        </div>
      </section>


      <section style={{ ...sectionStyle, backgroundColor: 'green' }} id="section3">
        <div className="container">
          <TriviaPage/>
          <div style={placeholderBoxStyle}>
            <p>Content for Section 3</p>
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, backgroundColor: 'red' }} id="section4">
        <div className="container">
          <WordGuesserComponent/>
          <div style={placeholderBoxStyle}>
            <p>Content for Section 4</p>
          </div>
        </div>
      </section>
      
      <section style={{ ...sectionStyle, backgroundColor: 'pink' }} id="section5">
        <div className="container">
          {/* Placeholder box */}
          <div style={placeholderBoxStyle}>
            <p>Content for Section 5</p>
          </div>
        </div>
      </section>

       {/* About section */}
       <section style={{ ...sectionStyle, backgroundColor: 'brown' }} id="section6">
        <div className="container">
          {/* AboutPage */}
          <h1>About the Creators</h1>
          <div style={aboutContainerStyle}>  {/* Container for each person - Daniel King*/}
            <div style={personContainerStyle}>
              {/* Container for the photo */}
              <div style={{ marginBottom: '10px' }}>
                <img src={kingimage} alt="Person" width="100" height="100" />
              </div>
              {/* Container for the name and bio */}
              <div>
                <p>Daniel King</p>
                <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis vel, aliquet justo.</p>
              </div>
            </div>
            
            <div style={personContainerStyle}> {/* Container for each person - Brian Ortiz*/}
              {/* Container for the photo */}
              <div style={{ marginBottom: '10px' }}>
                <img src={ortizimage} alt="Person" width="100" height="100" />
              </div>
              {/* Container for the name and bio */}
              <div>
                <p>Brian Ortiz</p>
                <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis vel, aliquet justo.</p>
              </div>
            </div>
            
            <div style={personContainerStyle}> {/* Container for each person - Daniel Soto*/}
              {/* Container for the photo */}
              <div style={{ marginBottom: '10px' }}>
                <img src={sotoimage} alt="Person" width="100" height="100" />
              </div>
              {/* Container for the name and bio */}
              <div>
                <p>Daniel Soto</p>
                <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis vel, aliquet justo.</p>
              </div>
            </div>
            
            <div style={personContainerStyle}> {/* Container for each person - Arlen Jackson*/}
              {/* Container for the photo */}
              <div style={{ marginBottom: '10px' }}>
                <img src={jacksonimage} alt="Person" width="100" height="100" />
              </div>
              {/* Container for the name and bio */}
              <div>
                <p>Arlen Jackson</p>
                <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis vel, aliquet justo.</p>
              </div>
            </div>

            <div style={personContainerStyle}> {/* Container for each person - Arlen Jackson*/}
              {/* Container for the photo */}
              <div style={{ marginBottom: '10px' }}>
                <img src={rogersimage} alt="Person" width="100" height="100" />
              </div>
              {/* Container for the name and bio */}
              <div>
                <p>Kyle Rogers</p>
                <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis vel, aliquet justo.</p>
              </div>
            </div>
            {/* Repeat the structure for other persons */}
            {/* Add more person containers as needed */}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <div style={aboutContainerStyle}>
        <h1>Contact Section for Jac Enterprises</h1>
      </div>
      {/* Remaining code for Contact section... */}
    </div>
  );
};

export default HomePage;
