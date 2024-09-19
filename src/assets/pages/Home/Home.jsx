import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import CardsContainer from "../../components/CardsContainer/CardsContainer"
import Footer from "../../components/Footer/Footer"

const Home = () => {
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
        <CardsContainer />
      </div>
      <Footer />
    </>
  )
}

export default Home
