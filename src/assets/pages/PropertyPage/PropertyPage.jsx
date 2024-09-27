import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import PropertyCarousel from "../../components/PropertyCarousel/PropertyCarousel"
import PropertyDescription from "../../components/PropertyDescription/PropertyDescription"
import Collapse from "../../components/Collapse/Collapse"
import "./PropertyPage.scss"

const PropertyPage = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const propertyData = data.find((item) => item.id === id)
        if (!propertyData) {
          navigate("/error404", { replace: true })
        } else {
          setProperty(propertyData)
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données :", error)
        setIsLoading(false)
      })
  }, [id, navigate])

  if (isLoading) return null
  // if (!property) return <Navigate to="/error404" replace />
  // alternative possible à useNavigate, dans ce cas importer Navigate au lieu de useNavigate

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
