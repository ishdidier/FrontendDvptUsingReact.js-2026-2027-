import { Link } from 'react-router-dom'

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <article className="movie-card">
      <Link
        to={`/movie/${movie.id}`}
        className="movie-poster"
        aria-label={`View details for ${movie.title}`}
      >
        <span aria-hidden="true">{movie.emoji}</span>
      </Link>

      <div className="movie-card-body">
        <h3 className="movie-card-title">
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </h3>

        <p className="movie-meta">
          <span>{movie.year}</span>
          <span className="movie-rating" aria-label={`Rating ${movie.rating} out of 10`}>
            ★ {movie.rating}
          </span>
        </p>

        <button
          type="button"
          className={`favorite-button${isFavorite ? ' is-favorite' : ''}`}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Remove ${movie.title} from favorites`
              : `Add ${movie.title} to favorites`
          }
          onClick={() => onToggleFavorite(movie.id)}
        >
          {isFavorite ? '♥ Favorited' : '♡ Favorite'}
        </button>
      </div>
    </article>
  )
}

export default MovieCard
