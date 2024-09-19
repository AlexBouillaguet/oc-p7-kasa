import { useState, useEffect } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import PropertyCarousel from "../../components/PropertyCarousel/PropertyCarousel"
import PropertyDescription from "../../components/PropertyDescription/PropertyDescription"
import { useParams, Navigate } from "react-router-dom"
import Collapse from "../../components/Collapse/Collapse"
import "./PropertyPage.scss"

const PropertyPage = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const propertyData = data.find((item) => item.id === id)
        setProperty(propertyData)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données :", error)
        setIsLoading(false)
      })
  }, [id])

  if (isLoading) return null
  if (!property) return <Navigate to="*" />

  return (
    <>
      <div className="page-container">
        <Header />
        <PropertyCarousel property={property} />
        <PropertyDescription
          title={property.title}
          location={property.location}
          tags={property.tags}
          host={property.host}
          rating={property.rating}
        />
        <div className="collapse-wrapper">
          <Collapse title="Description" content={property.description} />
          <Collapse
            title="Équipements"
            content={
              <ul className="equipment-list">
                {property.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PropertyPage
