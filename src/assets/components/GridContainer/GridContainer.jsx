import React, { useEffect, useState } from "react"
import "./GridContainer.scss"

const CardGrid = () => {
  const [properties, setProperties] = useState([]) // Initialisation de la liste des logements

  useEffect(() => { // Utilisation de useEffect pour récupérer les données JSON
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  return (
    <div className="card-grid">
      {properties.slice(0, 6).map((property) => ( // Utilisation de slice pour limiter à 6 propriétés
        <div key={property.id} className="card"> 
          <img src={property.cover} alt={property.title} /> 
          <div className="card-filter"></div>
          <div className="card-content">
            <h2>{property.title}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardGrid
