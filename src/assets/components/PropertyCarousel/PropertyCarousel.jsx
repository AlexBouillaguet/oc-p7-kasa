import { useState } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import "./PropertyCarousel.scss"

const PropertyCarousel = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const slidePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.pictures.length - 1 : prevIndex - 1
    )
  }

  const slideNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="property-carousel">
      <img
        src={property.pictures[currentImageIndex]}
        alt={`${property.title} - Image ${currentImageIndex + 1}`}
      />
      {property.pictures.length > 1 && (
        <div onClick={slidePrevious} className="chevrons left-chevron">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      )}
      {property.pictures.length > 1 && (
        <div onClick={slideNext} className="chevrons right-chevron">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      )}
      {property.pictures.length > 1 && (
        <div className="index-indicator" tabIndex="-1">
          {currentImageIndex + 1} / {property.pictures.length}
        </div>
      )}
    </div>
  )
}

PropertyCarousel.propTypes = {
  property: PropTypes.shape({
    title: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default PropertyCarousel
