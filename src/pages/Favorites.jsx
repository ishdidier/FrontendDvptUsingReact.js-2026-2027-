import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import { movies } from '../data/movies'

function Favorites({ favorites, onToggleFavorite }) {
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id))

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Your collection</p>
          <h1>Favorites</h1>
          <p className="page-intro">
            Movies you have saved are collected here. Remove one at any time.
          </p>
        </div>
        <p className="result-count">
          {favoriteMovies.length} {favoriteMovies.length === 1 ? 'movie' : 'movies'}
        </p>
      </div>

      {favoriteMovies.length > 0 ? (
        <div className="movie-grid">
          {favoriteMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="empty-icon" aria-hidden="true">♡</p>
          <h2>No favorites yet. Go add some!</h2>
          <p>Open a movie from the home page and press its favorite button.</p>
          <Link to="/" className="button-link">
            Browse movies
          </Link>
        </div>
      )}
    </section>
  )
}

export default Favorites
