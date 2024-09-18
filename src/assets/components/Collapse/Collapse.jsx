import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import "./Collapse.scss"

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <button className="collapse-title" onClick={toggleCollapse}>
        {title}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`chevron ${isOpen ? "rotate" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="collapse-content">
          <span>{content}</span>
        </div>
      )}
    </div>
  )
}

export default Collapse
