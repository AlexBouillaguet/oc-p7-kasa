import "./ErrorComponent.scss"
import { Link } from "react-router-dom"

const ErrorComponent = () => {
  return (
    <div className="error-component">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default ErrorComponent
