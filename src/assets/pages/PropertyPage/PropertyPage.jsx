import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import PropertyCarousel from "../../components/PropertyCarousel/PropertyCarousel"

const PropertyPage = () => {
  return (
    <>
      <div className="page-container">
        <Header />
        <PropertyCarousel />
      </div>
      <Footer />
    </>
  )
}

export default PropertyPage
