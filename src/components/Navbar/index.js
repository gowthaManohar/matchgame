import './index.css'

const Navbar = props => {
  const {score, timer} = props
  return (
    <nav className="nav-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </div>
      <ul className="timer-logo-container">
        <li>
          {score === 0 ? (
            <p className="score">score: 0</p>
          ) : (
            <p className="score">score: {score}</p>
          )}
        </li>
        <li className="timing-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="timing">{timer} secs</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
