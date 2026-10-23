import { Link, NavLink, Outlet } from 'react-router-dom'

function Layout({ favoritesCount }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand">
            <span aria-hidden="true">🎬</span> Movie Browser
          </Link>

          <nav className="site-nav" aria-label="Main navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              Favorites ({favoritesCount})
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Movie Browser — a small React + Vite project.</p>
      </footer>
    </div>
  )
}

export default Layout
