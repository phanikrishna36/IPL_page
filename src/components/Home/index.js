// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()
    const formattedData = data.teams.map(i => ({
      id: i.id,
      name: i.name,
      teamImageUrl: i.team_image_url,
    }))
    console.log(formattedData)
    this.setState({teamData: formattedData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state
    return (
      <div className="cont">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div>
            <div className="head">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <div className="cont1">
              {teamData.map(i => (
                <TeamCard key={i.id} itemDetails={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home
