import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./PropertyCarousel.scss"

const PropertyCarousel = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const PropertyId = data.find((item) => item.id === id)
        setProperty(PropertyId)
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des données :", error)
      )
  }, [id])

  if (!property) return <div>Chargement...</div>

  return (
    <div className="property-carousel">
      <img src={property.pictures[0]} alt={property.title} />
    </div>
  )
}

export default PropertyCarousel
