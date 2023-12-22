import React, { useState } from 'react'

const RPSComponent = () => {
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)
  const [draws, setDraws] = useState(0)
  const [result, setResult] = useState('')
  const [gameOver, setGameOver] = useState(false)

  const choices = ['Rock', 'Paper', 'Scissors']

  const playRound = (userChoice) => {
    if (gameOver) {
      return
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)]

    if (userChoice === computerChoice) {
      setDraws(draws + 1)
      setResult('It\'s a draw!')
    } else if (
      (userChoice === 'Rock' && computerChoice === 'Scissors') ||
      (userChoice === 'Paper' && computerChoice === 'Rock') ||
      (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      setWins(wins + 1)
      setResult(`You win! Computer chose ${computerChoice}.`)
    } else {
      setLosses(losses + 1);
      setResult(`You lose! Computer chose ${computerChoice}.`)
    }

    if (wins === 5 || losses === 5) {
      setGameOver(true);
      setResult(wins === 5 ? 'Congratulations, you win the series!' : 'Game over. Computer wins the series.')
    }
  }

  const resetGame = () => {
    setWins(0)
    setLosses(0)
    setDraws(0)
    setResult('')
    setGameOver(false)
  }

  return (
    <div>
      <h2>Rock, Paper, Scissors</h2>
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => playRound(choice)} disabled={gameOver}>
            {choice}
          </button>
        ))}
      </div>
      <p>{result}</p>
      <p>Wins: {wins} | Losses: {losses} | Draws: {draws}</p>
      {gameOver && <button onClick={resetGame}>Play Again</button>}
    </div>
  )
}

export default RPSComponent