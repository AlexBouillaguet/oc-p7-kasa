import React from "react"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import CardsContainer from "../../components/CardsContainer/CardsContainer"
import Footer from "../../components/Footer/Footer"
import "./Home.scss"

const Home = () => {
  return (
    <>
      <div className="page-container">
        <Header />
        <Banner
          imageUrl="/src/assets/images/banner1.jpg"
          title="Chez vous, partout et ailleurs"
        />
        <CardsContainer />
      </div>
      <Footer />
    </>
  )
}

export default Home
