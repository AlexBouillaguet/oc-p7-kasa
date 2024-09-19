import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent"

const Error404 = () => {
  return (
    <>
      <div className="page-container">
        <Header />
        <ErrorComponent />
      </div>
      <Footer />
    </>
  )
}

export default Error404
