import PropTypes from "prop-types"
import "./Banner.scss"

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      {<h1>{title}</h1>}
    </div>
  )
}

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.node,
}

export default Banner
