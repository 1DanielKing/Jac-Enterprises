import React, { useState } from 'react';
import { terms, definitions } from './context/WordGuesserArrays';
import WordGuesserLogoImage from '../images/WordGuesserLogo.png'

const WordGuesserComponent = () => {
    const [wordSelection] = useState(terms);

    const [word, setWord] = useState('');
    const [hiddenWord, setHiddenWord] = useState([]);
    const [lettersUsed, setLettersUsed] = useState([]);
    const [miss, setMiss] = useState(0);
    const [gameResult, setGameResult] = useState('');

    const initializeGame = () => {
        const index = Math.floor(Math.random() * wordSelection.length);
        const selectedWord = wordSelection[index];
        setWord(selectedWord);

        const initialHiddenWord = Array(selectedWord.length).fill('*');
        setHiddenWord(initialHiddenWord);
        setLettersUsed([]);
        setMiss(0);
        setGameResult('');
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center"
    };

    
    const letterMissContainerStyle = {
        width:"700px",
        height:"75px",
        display: 'flex',
        flexDirection: 'column',
        padding: "20px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 15,
        color:"white",
        fontSize: "30px",
        textAlign: "left",
        fontFamily: 'Arial, sans-serif',
      
    };
    const hiddenWordContainerStyle = {
        width:"735px",
        height:"35px",
        display: 'flex',
        padding: "5px",
        marginBottom:"10px",
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 7,
        color:"white",
        fontSize: "30px",
        textAlign: "left",
        fontFamily: 'Arial, sans-serif',
      
    }

    const wordGuesserLogoStyle = {
        height: "300px",
        width: "1000px",
        backgroundImage: `url(${WordGuesserLogoImage})`,
        backgroundSize: '100% 100%',
    };

    const logoContainer = {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        height:"200px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 15,
        marginBottom:"10px"
    }
    const textContainerStyle = {

        fontWeight: 'bold',
        fontSize: "25px",
        color: "white",
        marginBottom: "40px",
        fontFamily: 'Arial, sans-serif',
    };

    const buttonTextContainerStyle = {
        display: "flex",
        
        flexDirection: "column",
        padding: "20px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        margin: "0 20px 0 20px"
       
    };

    const resultButtonContainerStyle = {
        display: "flex",
        flexDirection: "row",
        gap: 10
    }
    const resultButtonStyle = {
        width: '150px',
        height: '50px',
        backgroundColor: 'navy',
        cursor: 'pointer',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '20px',
        
    };

    const buttonStyle = {
        width: '300px',
        height: '100px',
        backgroundColor: 'purple',
        cursor: 'pointer',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '40px',
        boxShadow: '0 0 10px 5px rgba(255, 182, 193, 0.5) inset',
    };

    const resultContainerStyle = {
        marginTop:"10px",
        backgroundColor: "yellow",
        padding:'5px',
        borderRadius: 5
    };

    const handleLetterInput = (userInput) => {
        setLettersUsed([...lettersUsed, userInput]);

        const updatedHiddenWord = [...hiddenWord];
        let match = false;

        for (let j = 0; j < word.length; j++) {
            if (userInput.toLowerCase() === word[j]) {
                updatedHiddenWord[j] = userInput.toLowerCase();
                match = true;
            }
        }

        setHiddenWord(updatedHiddenWord);

        if (!match) {
            setMiss((prevMiss) => prevMiss + 1);
        }

        if (updatedHiddenWord.join('') === word) {
            setGameResult(`Congratulations! You win. The word was: ${word} - ${definitions[terms.indexOf(word)]}`);
        } else if (miss + 1 === word.length - 2) {
            setGameResult(`Game Over! The word was: ${word} - ${definitions[terms.indexOf(word)]}`);
        }
    };

    const handleCheckLetter = () => {
        if (!word) {
            initializeGame();
            return;
        }

        const inputElement = document.getElementById('letterInput');
        const userInput = inputElement.value.trim();

        if (userInput.length === 1 && /^[a-zA-Z]$/.test(userInput)) {
            handleLetterInput(userInput);
        } else {
            setGameResult('Please enter a single letter.');
        }

        inputElement.value = '';
    };

    return (
        <div style={containerStyle}>
            <div style={logoContainer}>
                <div style={wordGuesserLogoStyle}></div>


            </div>
            {!word && (
                <div style={buttonTextContainerStyle}>

                    <div style={textContainerStyle}>Welcome to Word Guesser! Guess letters to discover secret words about Art, Science, and History! Each correct letter brings you closer to solving the mystery! Good Luck!</div>
                    <div style={buttonStyle} onClick={initializeGame}>B E G I N</div>
                </div>
            )}

            {word && (
                <>

                    <div style={hiddenWordContainerStyle}>
                        <div>{hiddenWord.join(' ')}</div>
                    </div>

                    <div style={letterMissContainerStyle}>
                        <div>Letters Used: {lettersUsed.join(' ')}</div>
                        <div>Misses: {miss}</div>
                    </div>

                    <div>
                    <input id="letterInput" type="text" maxLength="1" style={{ width: '300px', height: '50px', margin:'10px', borderRadius:'5px', fontSize: '30px', border: '5px solid black' }} />
                    </div>

                    <div style={resultButtonContainerStyle}>
                        <button style={resultButtonStyle} onClick={handleCheckLetter}>Check Letter</button>
                        <button style={resultButtonStyle} onClick={initializeGame}>New Game</button>
                    </div>

                    {gameResult && (
                        <div style={resultContainerStyle}>
                            <div style={{fontSize:"30px", fontWeight:'bold', fontFamily: 'Arial, sans-serif',}}>{gameResult}</div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default WordGuesserComponent;
