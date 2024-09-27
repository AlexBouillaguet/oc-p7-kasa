import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import Home from "./assets/pages/Home/Home"
import About from "./assets/pages/About/About"
import PropertyPage from "./assets/pages/PropertyPage/PropertyPage"
import Error404 from "./assets/pages/Error404/Error404"
import "./assets/styles/App.scss"

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<PropertyPage />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/error404" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
