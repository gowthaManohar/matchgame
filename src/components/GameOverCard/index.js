import './index.css'

const GameOverCard = props => {
  const {score, onPlayAgain} = props
  const playAgain = () => {
    onPlayAgain()
  }

  return (
    <div className="game-over-container">
      <img
        alt="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="trophy-img"
      />
      <p className="score-text">YOUR SCORE</p>
      <p className="card-score">{score}</p>
      <button type="button" onClick={playAgain} className="play-again-button">
        <img
          className="reset-img"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOverCard
