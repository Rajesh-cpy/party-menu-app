import { useNavigate } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="not-found-page">
      <div className="not-found-card">
        <h1 className="not-found-code">404</h1>

        <h2 className="not-found-title">Page Not Found</h2>

        <p className="not-found-description">
          The page you are looking for does not exist or has been moved.
        </p>

        <button
          type="button"
          className="not-found-btn"
          onClick={() => navigate('/')}
        >
          Back to Menu
        </button>
      </div>
    </div>
  )
}

export default NotFound
