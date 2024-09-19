import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons"
import "./PropertyDescription.scss"

const PropertyDescription = ({ title, location, tags, host, rating }) => {
  const showRating = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faSolidStar} className="star full" />
        )
      } else {
        stars.push(
          <FontAwesomeIcon key={i} icon={faSolidStar} className="star empty" />
        )
      }
    }
    return stars
  }
  return (
    <>
      <div className="property-wrapper">
        <div className="property-description">
          <h1>{title}</h1>
          <p>{location}</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="host-description">
          <div className="host">
            <div className="host-name">
              <span className="first-name">{host.name.split(" ")[0]}</span>
              <span className="last-name">{host.name.split(" ")[1]}</span>
            </div>
            <img src={host.picture} alt={host.name} />
          </div>
          <div className="rating">{showRating(rating)}</div>
        </div>
      </div>
    </>
  )
}

PropertyDescription.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
}

export default PropertyDescription
