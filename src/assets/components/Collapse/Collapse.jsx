import { useState, useRef } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import "./Collapse.scss"

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse-title">
        {title}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`chevron ${isOpen ? "rotate" : ""}`}
          onClick={toggleCollapse}
        />
      </div>
      <div
        ref={contentRef}
        className={`collapse-content ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <span>{content}</span>
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Collapse
