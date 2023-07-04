import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {itemDetails} = props
  const {id, name, teamImageUrl} = itemDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li type="none">
        <button type="button" className="teamLogoItem">
          <img className="bannerImage" src={teamImageUrl} alt={name} />
          <div>
            <p className="para">{name}</p>
          </div>
        </button>
      </li>
    </Link>
  )
}

export default TeamCard
