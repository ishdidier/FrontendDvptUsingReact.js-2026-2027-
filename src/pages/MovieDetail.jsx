import { Link, useParams } from 'react-router-dom'
import { movies } from '../data/movies'

function MovieDetail({ favorites, onToggleFavorite }) {
  const { id } = useParams()
  const movieId = Number(id)
  const movie = movies.find((item) => item.id === movieId)

  if (!movie) {
    return (
      <section className="page">
        <div className="empty-state">
          <p className="empty-icon" aria-hidden="true">🎬</p>
          <h1>Movie not found</h1>
          <p>We could not find a movie with the ID “{id}”.</p>
          <Link to="/" className="button-link">
            Back to Home
          </Link>
        </div>
      </section>
    )
  }

  const isFavorite = favorites.includes(movie.id)

  return (
    <section className="page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <article className="movie-detail">
        <div className="detail-poster" aria-hidden="true">
          {movie.emoji}
        </div>

        <div className="detail-info">
          <p className="eyebrow">{movie.genre}</p>
          <h1>{movie.title}</h1>

          <div className="detail-meta">
            <span>{movie.year}</span>
            <span className="movie-rating" aria-label={`Rating ${movie.rating} out of 10`}>
              ★ {movie.rating} / 10
            </span>
          </div>

          <section className="detail-description" aria-labelledby="movie-description-heading">
            <h2 id="movie-description-heading">Movie Description</h2>
            <p>{movie.description}</p>
          </section>

          <button
            type="button"
            className={`favorite-button detail-favorite${isFavorite ? ' is-favorite' : ''}`}
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(movie.id)}
          >
            {isFavorite ? '♥ Remove from Favorites' : '♡ Add to Favorites'}
          </button>
        </div>
      </article>
    </section>
  )
}

export default MovieDetail
