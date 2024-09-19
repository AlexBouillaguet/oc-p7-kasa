import "./ErrorComponent.scss"
import { Link } from "react-router-dom"

const ErrorComponent = () => {
  return (
    <div className="error-component">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div>
  )
}

export default ErrorComponent
