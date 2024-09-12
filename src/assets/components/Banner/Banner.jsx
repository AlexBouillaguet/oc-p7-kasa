import React from "react"
import "./Banner.scss"

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      {<h1>{title}</h1>} 
    </div>
  )
}

export default Banner
