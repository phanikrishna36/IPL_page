// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamData: [], isLoading: false}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(i => ({
        umpires: i.umpires,
        result: i.result,
        manOfTheMatch: i.man_of_the_match,
        id: i.id,
        date: i.date,
        venue: i.venue,
        competingTeam: i.competing_team,
        competingTeamLogo: i.competing_team_logo,
        // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
        firstInnings: i.first_innings,
        secondInnings: i.second_innings,
        matchStatus: i.match_status,
      })),
    }
    this.setState({teamData: updatedData})
  }

  render() {
    const {teamData} = this.state

    console.log(teamData)
    return (
      <div className="secondPage">
        <img
          className="MainImage"
          src={teamData.teamBannerUrl}
          alt="team banner"
        />
        <h1 className="latest">Latest Matches</h1>
        <div>
          {teamData.latestMatchDetails && (
            <LatestMatch latestMatchDetails={teamData.latestMatchDetails} />
          )}
        </div>
        <div>
          {teamData.recentMatches && (
            <ul className="ThirdPage">
              {teamData.recentMatches.map(i => (
                <MatchCard key={i.id} itemDetails={i} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default TeamMatches
