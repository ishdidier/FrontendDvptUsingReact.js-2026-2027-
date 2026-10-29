
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import Movies from "./data/movies";

function MovieBrowser() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("movie-favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "movie-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function toggleFavorite(movieId) {
    setFavorites((current) =>
      current.includes(movieId)
        ? current.filter((id) => id !== movieId)
        : [...current, movieId]
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="favorites"
            element={
              <Favorites
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          

          <Route
            path="movie/:id"
            element={
              <MovieDetail
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
<Route
            path="movies/:id"
            element={
              <Movies
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return <MovieBrowser />;
}
