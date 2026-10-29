
import { Link, useParams } from "react-router-dom";
import movies from "../data/movies.js";

export default function MovieDetail({
  favorites = [],
  toggleFavorite = () => {},
}) {
  const { id } = useParams();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return (
      <section className="mx-auto flex min-h-[70vh] w-[90%] flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">
          Movie not found
        </h1>
        <Link
          to="/"
          className="mt-6 rounded-xl bg-lime-300 px-6 py-3 font-bold text-black"
        >
          Back to Home
        </Link>
      </section>
    );
  }

  const isFavorite = favorites.includes(movie.id);

  return (
    <section className="mx-auto min-h-[70vh] w-[90%] max-w-7xl py-12 sm:py-16">
      <Link
        to="/"
        className="mb-8 inline-block text-sm text-gray-400 transition hover:text-lime-300"
      >
        ← Back to movies
      </Link>

      <div className="grid items-start gap-8 md:grid-cols-[300px_1fr] md:gap-14">
        <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#14171c]">
          <img
            src={movie.poster}
            alt={movie.title}
            className="aspect-[2/3] w-full object-cover"
          />
        </div>

        <div className="py-2">
          <span className="text-xs font-bold tracking-[0.2em] text-lime-300">
            MOVIE DETAILS
          </span>

          <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
            {movie.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-400">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.genre}</span>
            <span>•</span>
            <span>{movie.duration}</span>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-lime-300/20 bg-lime-300/10 px-4 py-3 font-bold text-lime-300">
            ★ {movie.rating} / 10
          </div>

          <h2 className="mt-8 text-lg font-bold">Synopsis</h2>

          <p className="mt-3 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base">
            {movie.description}
          </p>

          <button
            onClick={() => toggleFavorite(movie.id)}
            className="mt-8 rounded-xl bg-lime-300 px-6 py-3.5 text-sm font-extrabold text-black transition hover:-translate-y-0.5 hover:bg-lime-200"
          >
            {isFavorite
              ? "♥ Remove from Favorites"
              : "♡ Add to Favorites"}
          </button>
        </div>
      </div>
    </section>
  );
}
