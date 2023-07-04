// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    competingTeam,
    competingTeamLogo,
    result,
    date,
    venue,
    firstInnings,
    secondInnings,
    manOfTheMatch,
  } = latestMatchDetails

  return (
    <li type="none">
      <div className="latestMatchCont">
        <div>
          <h1>{competingTeam}</h1>
          <h2>{date}</h2>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img
            className="oppositeLogo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div>
          <h4>First Innings</h4>
          <p>{firstInnings}</p>
          <h4>Second Innings</h4>
          <p>{secondInnings}</p>
          <h4>Man of the Match</h4>
          <p>{manOfTheMatch}</p>
          <h4>Umpires</h4>
          <p>{umpires}</p>
        </div>
      </div>
    </li>
  )
}

export default LatestMatch
