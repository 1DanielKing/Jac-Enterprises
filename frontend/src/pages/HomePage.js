import RPSComponent from "../components/RPSComponent"
import TriviaPage from "./TriviaPage"
import WordGuesserComponent from "../components/WordGuesserComponent"
import controllerImage from '../images/controller.jpg'
import spaceImage from '../images/space.jpg'
import teamImage from '../images/team.jpg'
import wallpaperImage from '../images/wallpaper.png'


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
        backgroundImage: `url(${wallpaperImage}), linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red)`,
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
        border: "10px solid yellow",
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
                style={{ ...sectionStyle, backgroundColor: "pink" }}
                id="section5">
                <div style={horizontalContainersStyle}>
                    <div style={containerItemStyle}>
                        <button id="nasaBtn">NASA</button>
                    </div>
                    <div style={containerItemStyle}>
                        <button id="metBtn" onClick={fetch('http://localhost:8080/arts', { method: 'GET', headers: { 'Content-Type': 'application/json' } })}>Metropolitan Museum of Art</button>
                    </div>
                    <div style={containerItemStyle}>
                        <button id="factsBtn">Facts</button>
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
