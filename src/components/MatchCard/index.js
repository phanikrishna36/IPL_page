// Write your code here
const MatchCard = props => {
  const {itemDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = itemDetails

  return (
    <li type="none" className="MatchCard">
      <img
        className="size"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
