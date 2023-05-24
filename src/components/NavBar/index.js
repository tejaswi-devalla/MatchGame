import './index.css'

const NavBar = props => {
  const {score, timer} = props
  return (
    <div className="navbar-cont">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </div>
      <ul className="score-timer-cont">
        <li>
          <p className="score-text">
            Score: <span className="score">{score}</span>
          </p>
        </li>
        <li style={{display: 'flex'}}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="score">{timer} Sec</p>
        </li>
      </ul>
    </div>
  )
}
export default NavBar
