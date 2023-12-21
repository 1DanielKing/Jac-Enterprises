import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wallpaperImage from '../images/wallpaper.png'

const ScienceQuestionComponent = () => {
  const [question, setQuestion] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/questions/science/random');
      const data = await response.json();
      setQuestion(data);
      setSelectedChoice(null);
      setResult(null);
      setQuizStarted(true);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  const handleSubmit = () => {
    if (selectedChoice === null) {
      setResult('Please select an answer before submitting.');
      return;
    }
    const isCorrect = selectedChoice === question.answerIndex;
    setResult(isCorrect ? 'Correct!' : 'Wrong!');
  };

  const handleNextQuestion = async () => {
    if (result !== 'Correct!') {
      setResult('Must Answer Correctly!');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/questions/science/random');
      const data = await response.json();
      setQuestion(data);
      setSelectedChoice(null);
      setResult(null);
    } catch (error) {
      console.error('Error fetching next question:', error);
    }
  };

  const handleChoiceClick = (index) => {
    setSelectedChoice(index);
  };

  const handleGoBack = () => {
    // Use navigate to go back
    navigate(-1);
  };
  const pageLayout = {
    height: "100vh",
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "0px",
    backgroundImage: `url(${wallpaperImage}), linear-gradient(to right,indigo, orange, red)`,
    backgroundSize: '100% 100%',
    gap: 30
  }

  const beginButtonStyle = {
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

  const introTextStyle = {
    backgroundColor: 'rgba(255,255,255,0.8)',
    fontSize: '30px',
    margin: '0 40px',
    padding: '5px',
    borderRadius: 5,
    fontWeight: 'bold'

  }
  const resultButtonContainer = {
    display: "flex",
    flexDirection: "row",
    gap: 10,

  }
  const resultButtonStyle = {
    width: '150px',
    height: '60px',
    cursor: 'pointer',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '30px',
  }
  const backButtonStyle = {
    width: '120px',
    height: '40px',
    cursor: 'pointer',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '30px',
    marginTop: '20px'
  }

  return (

    <div>

      <div style={pageLayout}>

        {!quizStarted && <div style={introTextStyle}>Commence on an epic quest through the world of science in our trivia game! Discover incredible facts, meet amazing creatures, and unravel the secrets of the universe. Unleash your curiosity!</div>}

        {!quizStarted && <button style={beginButtonStyle} onClick={handleButtonClick}>BEGIN</button>}
        {!quizStarted && <button style={{ ...backButtonStyle, backgroundColor: 'red' }} onClick={handleGoBack}>Back</button>}



        {question && (
          <div>
            <h2 style={{ color: 'white', fontSize: '40px', backgroundColor: 'rgba(0,0,0,0.8)', padding: '15px', borderRadius: 10 }}>{question.questionText}</h2>
            <div>
              {question.choices.map((choice, index) => (
                <div
                  key={index}
                  onClick={() => handleChoiceClick(index)}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                    color: 'white',
                    fontSize: '30px',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: '15px',
                    borderRadius: 10,
                    height: '40px'

                  }}
                >
                  <div
                    style={{
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      backgroundColor: index === selectedChoice ? 'blue' : 'transparent',
                      marginRight: '10px',
                      border: '2px solid #ccc',
                    }}
                  />
                  {choice}
                </div>
              ))}
            </div>
            <div style={resultButtonContainer}>
              <button style={{ ...resultButtonStyle, backgroundColor: 'green' }} onClick={handleSubmit}>Submit</button>
              <button style={{ ...resultButtonStyle, backgroundColor: 'blue' }} onClick={handleNextQuestion}>Next</button>

              {result && <div style={{ backgroundColor: 'yellow', width: '500px', borderRadius: 10, padding: '5px', fontSize: '40px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', marginLeft: '140px' }}>{result}</div>}
            </div>
            <button style={{ ...backButtonStyle, backgroundColor: 'red' }} onClick={handleGoBack}>Back</button>
          </div>
        )}
      </div>
    </div>


  );
};

export default ScienceQuestionComponent;
