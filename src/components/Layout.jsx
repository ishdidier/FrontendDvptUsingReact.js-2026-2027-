
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0d10] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d10]/95 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] w-[90%] max-w-7xl items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-xl font-bold sm:text-2xl"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime-300 text-sm text-black">
              ▶
            </span>
            Movie<span className="text-lime-300">Box</span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-lime-300"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-lime-300"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              Favorites <span aria-hidden="true">♥</span>
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 px-5 py-7 text-center text-xs text-gray-500">
        <p>
          MovieBox © {new Date().getFullYear()} — Discover your next favorite movie.
        </p>
      </footer>
    </div>
  );
}
