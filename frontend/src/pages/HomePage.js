import RPSComponent from "../components/RPSComponent"
import TriviaComponent from "../components/TriviaComponent"

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
    const homeSectionStyle = {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "0px",
        backgroundImage: `url(${wallpaperImage}), linear-gradient(to right,indigo, orange, red)`,
        backgroundSize: '100% 100%',
    }

    const homeBannerStyle = {
        width: '100vw',
    }

    const containerModel = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        height: "65vh",
        padding: "40px",
        marginTop: '150px',
        borderRadius: 15,
    }

    const imageHorizontalContainers = {
        display: "flex",
        justifyContent: "space-evenly",
        padding: " 0 40px 0 40px",
    };

    const imageContainerModel = {
        height: "300px",
        width: "275px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "10px solid white",
        backgroundImage: `url(${controllerImage})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: 15,
    };

    const subContainerModel = {
        width: "270px",
        height: "220px",
        padding: "3px",
        borderRadius: 10,
        textAlign: "center",
        fontSize: '20px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
    };
    const buttonStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: "limegreen",
        cursor: "pointer",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: 'white',
        fontWeight: 'bold',
    };



  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
        <div>
            <section style={{ ...homeSectionStyle }} id="section1">
                <div style={{ ...homeBannerStyle }}>


                    <div style={imageHorizontalContainers}>

                        <div style={containerModel}>
                            <div style={{ ...imageContainerModel, backgroundImage: `url(${controllerImage})` }} onClick={() => scrollToSection("section2")}>
                            </div>
                            <div style={subContainerModel}>
                                <p>Embark on a journey of fun and learning! Dive into educational games like Rock, Paper, Scissors, explore trivia about art, science, and history, and challenge your mind with word guessers. Adventure awaits!</p>
                            </div>
                            <div style={buttonStyle} onClick={() => scrollToSection("section2")}>PLAY NOW</div>
                        </div>

                        <div style={containerModel}>
                            <div style={{ ...imageContainerModel, backgroundImage: `url(${spaceImage})` }}>
                            </div>
                            <div style={subContainerModel}>
                                <p>Begin an exciting journey of learning! Dive into the wonders of science, art, and history. Ignite curiosity and exploration in a world of endless possibilities. Join us for an educational adventure!</p>
                            </div>
                            <div style={buttonStyle} onClick={() => scrollToSection("section5")}>LEARN NOW</div>
                        </div>

                        <div style={containerModel}>
                            <div style={{ ...imageContainerModel, backgroundImage: `url(${teamImage})` }}>
                            </div>
                            <div style={subContainerModel}>
                                <p>Discover the magic behind the scenes! Dive into our "About Us" page to meet the creators and explore the inspiration that fuels this educational adventure. Join us on this fascinating journey!</p>
                            </div>
                            <div style={buttonStyle} onClick={() => scrollToSection("section6")}>MEET US</div>
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
                style={{ ...sectionStyle, backgroundImage: `url(${wallpaperImage}), linear-gradient(to right, violet, orange, lightblue)`, backgroundSize: '100% 100%', }}
                id="section3"
            >
                <div className="container">
                    <TriviaComponent />

                </div>
            </section>

            <section
                style={{ ...sectionStyle, backgroundImage: `url(${wallpaperImage}), linear-gradient(to right, violet, red)`, backgroundSize: '100% 100%', }}
                id="section4"
            >
                <div className="container">
                    <WordGuesserComponent />

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
            <b>If a picture doesn't appear after loading, please click again!</b>
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