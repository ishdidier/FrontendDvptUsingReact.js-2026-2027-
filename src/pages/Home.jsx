import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import { movies } from '../data/movies'

function Home({ favorites, onToggleFavorite }) {
  const [searchQuery, setSearchQuery] = useState('')

  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredMovies = movies.filter((movie) => {
    const titleMatches = movie.title.toLowerCase().includes(normalizedQuery)
    const genreMatches = movie.genre.toLowerCase().includes(normalizedQuery)
    return titleMatches || genreMatches
  })

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Now showing</p>
          <h1>Find your next favorite film</h1>
          <p className="page-intro">
            Browse a small hand-picked collection of movies. Search by title or genre,
            then open any movie to learn more.
          </p>
        </div>
        <p className="result-count">
          {filteredMovies.length === movies.length
            ? `${movies.length} movies`
            : `${filteredMovies.length} of ${movies.length} movies`}
        </p>
      </div>

      <div className="search-panel">
        <label htmlFor="movie-search">Search movies</label>
        <div className="search-row">
          <input
            id="movie-search"
            type="search"
            placeholder="Search by title or genre..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            autoComplete="off"
          />
          {searchQuery && (
            <button
              type="button"
              className="clear-button"
              onClick={() => setSearchQuery('')}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {filteredMovies.length > 0 ? (
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.includes(movie.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="empty-icon" aria-hidden="true">🔍</p>
          <h2>No movies found</h2>
          <p>
            Nothing matches “{searchQuery.trim()}”. Try a different title or genre.
          </p>
          <button
            type="button"
            className="button-link"
            onClick={() => setSearchQuery('')}
          >
            Clear search
          </button>
        </div>
      )}
    </section>
  )
}

export default Home
