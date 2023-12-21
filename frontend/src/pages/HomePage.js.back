import RPSComponent from "../components/RPSComponent"
import TriviaPage from "./TriviaPage"
import WordGuesserComponent from "../components/WordGuesserComponent"
import controllerImage from '../images/controller.jpg'
import spaceImage from '../images/space.jpg'
import teamImage from '../images/team.jpg'
import wallpaperImage from '../images/wallpaper.png'


const HomePage = () => {
    /**Global */
    const sectionStyle = {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "10px",
    }
    /**Global */
    const placeholderBoxStyle = {
        width: "300px",
        height: "200px",
        backgroundColor: "#ddd",
        border: "1px solid #999",
        padding: "20px",
        margin: "20px",
    }

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

    const horizontalContainersStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        padding: " 0 40px 0 40px",
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


                    <div style={horizontalContainersStyle}>

                        <div style={containerModel}>
                            <div style={{ ...imageContainerModel, backgroundImage: `url(${controllerImage})` }} onClick={() => scrollToSection("section2")}>
                            </div>
                            <div style={subContainerModel}>
                                <p>Embark on a journey of fun and learning! Dive into educational games like Rock, Paper, Scissors, explore trivia about art, science, and history, and challenge your mind with word guessers. Adventure awaits!</p>
                            </div>
                            <div style={buttonStyle}onClick={() => scrollToSection("section2")}>PLAY NOW</div>
                        </div>

                        <div style={containerModel}>
                            <div style={{ ...imageContainerModel, backgroundImage: `url(${spaceImage})`}}>
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
                    <TriviaPage />
                    <div style={placeholderBoxStyle}>
                        <p>Content for Section 3</p>
                    </div>
                </div>
            </section>

            <section style={{ ...sectionStyle, backgroundColor: 'red' }} id="section4">
                <div className="container">
                    <WordGuesserComponent />
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
