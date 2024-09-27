import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import Footer from "../../components/Footer/Footer"
import "./Home.scss"

const Home = () => {
  const [properties, setProperties] = useState([]) // Initialisation de la liste des logements

  useEffect(() => {
    // Utilisation de useEffect pour récupérer les données JSON
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  return (
    <>
      <div className="page-container">
        <Header />
        <Banner
          imageUrl="/src/assets/images/banner1.jpg"
          title={
            <>
              <span className="banner__title-top">Chez vous,</span>{" "}
              <span className="banner__title-bottom">partout et ailleurs</span>
            </>
          }
        />
        <div className="card-grid">
          {properties.map((property) => (
            <Link to={`/logement/${property.id}`} key={property.id}>
              <Card title={property.title} cover={property.cover} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
