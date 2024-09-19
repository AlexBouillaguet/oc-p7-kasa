import { NavLink, Link } from "react-router-dom"
import "./Header.scss"

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="\src\assets\images\.LOGO.png" alt="logo kasa" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/a-propos">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
