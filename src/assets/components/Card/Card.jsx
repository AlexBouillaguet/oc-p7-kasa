import PropTypes from "prop-types"
import "./Card.scss"

const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <div className="card-filter"></div>
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

export default Card
