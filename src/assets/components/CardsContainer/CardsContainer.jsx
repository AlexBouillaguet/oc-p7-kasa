import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./CardsContainer.scss"

const CardsContainer = () => {
  const [properties, setProperties] = useState([]) // Initialisation de la liste des logements

  useEffect(() => {
    // Utilisation de useEffect pour récupérer les données JSON
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  return (
    <div className="card-grid">
      {properties.map(
        (
          property
        ) => (
          <Link to={`/logement/${property.id}`} key={property.id}>
            <div key={property.id} className="card">
              <img src={property.cover} alt={property.title} />
              <div className="card-filter"></div>
              <div className="card-content">
                <h2>{property.title}</h2>
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  )
}

export default CardsContainer
