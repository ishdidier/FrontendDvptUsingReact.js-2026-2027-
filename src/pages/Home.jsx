
import { useMemo, useState } from "react";
import movies from "../data/movies.js";
import MovieCard from "../components/MovieCard.jsx";

export default function Home({
  favorites,
  toggleFavorite,
}) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const genres = [
    "All",
    ...new Set(movies.map((movie) => movie.genre)),
  ];

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesGenre =
        genre === "All" || movie.genre === genre;

      return matchesSearch && matchesGenre;
    });
  }, [search, genre]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_80%_30%,rgba(183,245,104,0.12),transparent_40%),linear-gradient(120deg,#14191d,#0b0d10)]">
        <div className="relative mx-auto w-[90%] max-w-7xl py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="mb-5 inline-block text-xs font-extrabold tracking-[0.25em] text-lime-300">
              YOUR MOVIE DESTINATION
            </span>

            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
              Find your next
              <br />
              <span className="text-lime-300">
                favorite movie.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
              Explore great stories, discover new favorites,
              and build your personal movie collection.
            </p>

            <a
              href="#movie-list"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-300 px-6 py-3.5 text-sm font-extrabold text-black transition hover:-translate-y-1 hover:bg-lime-200"
            >
              Explore Movies <span>↓</span>
            </a>
          </div>

          <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 rotate-6 select-none font-display text-[280px] font-bold text-lime-300/[0.035] lg:block">
            ▶
          </div>
        </div>
      </section>

      <section
        id="movie-list"
        className="mx-auto w-[90%] max-w-7xl py-14 sm:py-20"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-lime-300">
              HANDPICKED FOR YOU
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Explore Movies
            </h2>
          </div>

          <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-400">
            {filteredMovies.length} movies
          </span>
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            placeholder="Search movies by title..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search movies"
            className="min-h-12 min-w-0 flex-1 rounded-xl border border-white/10 bg-[#14171c] px-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-lime-300"
          />

          <select
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            aria-label="Filter by genre"
            className="min-h-12 rounded-xl border border-white/10 bg-[#14171c] px-4 text-sm text-white outline-none focus:border-lime-300"
          >
            {genres.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All genres" : item}
              </option>
            ))}
          </select>
        </div>

        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/10 px-5 py-20 text-center">
            <p className="text-4xl text-lime-300">⌕</p>
            <h3 className="mt-4 text-xl font-bold">
              No movies found
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Try another title or genre.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setGenre("All");
              }}
              className="mt-5 rounded-xl bg-lime-300 px-5 py-3 text-sm font-bold text-black hover:bg-lime-200"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}
