
import { Link } from "react-router-dom";

export default function MovieCard({
  movie,
  favorites = [],
  toggleFavorite = () => {},
}) {
  const isFavorite = favorites.includes(movie.id);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#14171c] transition duration-300 hover:-translate-y-1 hover:border-lime-300/50 hover:shadow-xl hover:shadow-black/30">
      <Link
        to={`/movie/${movie.id}`}
        aria-label={`View ${movie.title}`}
        className="block"
      >
        <div className="relative aspect-[2/3] overflow-hidden bg-[#22262d]">
          <img
            src={movie.poster}
            alt={movie.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <span className="absolute bottom-3 left-3 rounded-lg bg-black/80 px-3 py-1.5 text-xs font-bold text-lime-300">
            ★ {movie.rating}
          </span>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => toggleFavorite(movie.id)}
        aria-label={
          isFavorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
        className={`absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-white/15 text-2xl backdrop-blur-md transition hover:scale-110 ${
          isFavorite
            ? "bg-lime-300 text-black"
            : "bg-black/60 text-white hover:bg-lime-300 hover:text-black"
        }`}
      >
        {isFavorite ? "♥" : "♡"}
      </button>

      <div className="p-4">
        <Link
          to={`/movie/${movie.id}`}
          className="block truncate font-display text-base font-bold text-white transition hover:text-lime-300"
        >
          {movie.title}
        </Link>

        <p className="mt-2 text-xs text-gray-400">
          {movie.year} <span className="px-1 text-lime-300">•</span>{" "}
          {movie.genre}
        </p>

        <Link
          to={`/movie/${movie.id}`}
          className="mt-4 inline-block text-sm font-semibold text-lime-300 hover:text-lime-200"
        >
          View details →
        </Link>
      </div>
    </article>
  );
}
