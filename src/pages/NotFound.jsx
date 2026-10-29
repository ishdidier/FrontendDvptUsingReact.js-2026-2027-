
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-[90%] max-w-3xl flex-col items-center justify-center text-center">
      <span className="text-xs font-extrabold tracking-[0.3em] text-lime-300">
        ERROR 404
      </span>

      <h1 className="mt-5 font-display text-4xl font-bold sm:text-6xl">
        Lost in the movies?
      </h1>

      <p className="mt-5 text-sm leading-7 text-gray-400">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-7 rounded-xl bg-lime-300 px-6 py-3 font-bold text-black transition hover:bg-lime-200"
      >
        Return Home
      </Link>
    </section>
  );
}
