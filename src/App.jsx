import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { movies } from './data/movies'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import NotFound from './pages/NotFound'

const FAVORITES_STORAGE_KEY = 'movie-browser-favorites'

function loadFavorites() {
  try {
    const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY)

    if (!savedFavorites) {
      return []
    }

    const parsedFavorites = JSON.parse(savedFavorites)

    if (!Array.isArray(parsedFavorites)) {
      return []
    }

    const validFavorites = parsedFavorites.filter(
      (id) => Number.isInteger(id) && movies.some((movie) => movie.id === id),
    )

    return [...new Set(validFavorites)]
  } catch {
    return []
  }
}

function App() {
  const [favorites, setFavorites] = useState(loadFavorites)

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  function toggleFavorite(movieId) {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(movieId)
        ? currentFavorites.filter((id) => id !== movieId)
        : [...currentFavorites, movieId],
    )
  }

  return (
    <Routes>
      <Route element={<Layout favoritesCount={favorites.length} />}>
        <Route
          path="/"
          element={<Home favorites={favorites} onToggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/movie/:id"
          element={
            <MovieDetail favorites={favorites} onToggleFavorite={toggleFavorite} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
