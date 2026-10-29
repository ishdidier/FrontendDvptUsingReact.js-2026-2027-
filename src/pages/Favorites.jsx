
import { Link } from "react-router-dom";
import movies from "../data/movies.js";
import MovieCard from "../components/MovieCard.jsx";

export default function Favorites({
  favorites = [],
  toggleFavorite = () => {},
}) {
  const favoriteMovies = movies.filter((movie) =>
    favorites.includes(movie.id)
  );

  return (
    <section className="mx-auto min-h-[70vh] w-[90%] max-w-7xl py-14 sm:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-lime-300">
            YOUR PERSONAL COLLECTION
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            My Favorites <span className="text-lime-300">♥</span>
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            Keep all your favorite movies in one place.
          </p>
        </div>

        <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-400">
          {favoriteMovies.length} saved
        </span>
      </div>

      {favoriteMovies.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {favoriteMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 px-5 text-center">
          <span className="text-6xl text-lime-300">♡</span>
          <h2 className="mt-5 text-2xl font-bold">
            No favorites yet
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Click the heart on any movie to save it here.
          </p>
          <Link
            to="/"
            className="mt-6 rounded-xl bg-lime-300 px-6 py-3 text-sm font-extrabold text-black transition hover:bg-lime-200"
          >
            Discover Movies
          </Link>
        </div>
      )}
    </section>
  );
}
