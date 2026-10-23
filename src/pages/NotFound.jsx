import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page">
      <div className="empty-state">
        <p className="error-code" aria-hidden="true">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or may have been moved.</p>
        <Link to="/" className="button-link">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
