import RPSComponent from "../components/RPSComponent"
import TriviaPage from "./TriviaPage"
import WordGuesserComponent from "../components/WordGuesserComponent"
import controllerImage from '../images/controller.jpg'
import spaceImage from '../images/space.jpg'
import teamImage from '../images/team.jpg'
import wallpaperImage from '../images/wallpaper.png'

import FactsComponent from "../components/FactsComponent";
import MetApiComponent from "../components/MetApiComponent";
import NasaApiComponent from "../components/NasaApiComponent"

const HomePage = () => {
  const sectionStyle = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#add8e6",
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
    height: "100%", // Set height to 100% to match the height of the horizontal containers
    width: "250px", // Adjust the width to make the containers wider
    borderRadius: 15,
  };

  const containerItemStyleS5 = {
    flex: 1,
    background: "rgb(221, 221, 221, 0.4)",
    padding: "10px",
    margin: "10px",
    height: "100vh", // Set height to 100% to match the height of the horizontal containers
    width: "60vh", // Adjust the width to make the containers wider
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
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
      <section
        style={{ ...sectionStyle, backgroundColor: "#add8e6" }}
        id="section1"
      >
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

      <section
        style={{ ...sectionStyle, backgroundColor: "yellow" }}
        id="section2"
      >
        <div className="container">
          <RPSComponent />
          <div style={placeholderBoxStyle}>
            <p>Content for Section 2</p>
          </div>
        </div>
      </section>

      <section
        style={{ ...sectionStyle, backgroundColor: "green" }}
        id="section3"
      >
        <div className="container">
          <TriviaPage />
          <div style={placeholderBoxStyle}>
            <p>Content for Section 3</p>
          </div>
        </div>
      </section>

      <section
        style={{ ...sectionStyle, backgroundColor: "red" }}
        id="section4"
      >
        <div className="container">
          <WordGuesserComponent />
          <div style={placeholderBoxStyle}>
            <p>Content for Section 4</p>
          </div>
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          backgroundImage: `url(${wallpaperImage})`,
          backgroundSize: "cover",
          backgroundColor: "pink",
          paddingTop: 30,
          paddingBottom: 50,
        }}
        id="section5"
      >
        <div style={{ ...horizontalContainersStyle, alignItems: 'center' }}>
          <div style={containerItemStyleS5}>
            <NasaApiComponent id="nasaBtn">NASA</NasaApiComponent>
          </div>
          <div style={{ ...containerItemStyleS5, fontSize: 14, paddingTop: 40}}>
            <b>If a picture doesn't appear, please click again!</b>
            <MetApiComponent id="metBtn">
              Metropolitan Museum of Art
            </MetApiComponent>
          </div>
          <div style={containerItemStyleS5}>
            <FactsComponent id="factsBtn"> Facts </FactsComponent>
          </div>
        </div>
      </section>

      <section
        style={{ ...sectionStyle, backgroundColor: "brown" }}
        id="section6"
      >
        <div className="container">
          Placeholder box
          <div style={placeholderBoxStyle}>
            <p>Content for Section 6</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
