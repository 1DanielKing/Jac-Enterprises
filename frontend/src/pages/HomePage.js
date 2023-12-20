import React from "react";
import RPSComponent from "../components/RPSComponent";
import TriviaPage from "./TriviaPage";
import WordGuesserComponent from "../components/WordGuesserComponent";

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

      <section style={{ ...sectionStyle, backgroundColor: 'brown' }} id="section6">
        <div className="container">
          {/* Placeholder box */}
          <div style={placeholderBoxStyle}>
            <p>Content for Section 6</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
