# Assignment Answers

## 1. What is the difference between props and state?

**Props** are values that a parent component passes down to a child component. They are read-only inside the child: the child uses them but does not change them. Props make a component reusable. For example, `MovieCard` receives a `movie` prop, so the same component can display every movie in the list.

```jsx
<MovieCard movie={movie} />
```

**State** is data that belongs to a component and can change while the app is running. It is created with `useState`, and React re-renders the component when the state changes. For example, `Home` uses state to store the search text, and `App` uses state to store the favorite movie IDs.

```jsx
const [searchQuery, setSearchQuery] = useState('')
```

In short: props come from the parent and are read-only, while state is owned by the component and can be updated with its setter function.

## 2. Why does every item rendered using `map()` need a unique key?

React uses the `key` to identify each item in a list. When the list changes, React compares the keys to decide which items were added, removed, or kept. A stable, unique key helps React update the correct elements and avoid unnecessary re-renders or bugs.

In this project, each movie has a unique `id`, so the movie grid uses `key={movie.id}`. The key is not passed to `MovieCard` as a normal prop; it is only used by React.

```jsx
{movies.map((movie) => (
  <MovieCard key={movie.id} movie={movie} />
))}
```

Using the array index as a key is risky when items can be added, removed, or reordered.

## 3. What does `Outlet` do in React Router?

`Outlet` marks where a nested route should be rendered inside a parent route. In this project, `Layout` contains the shared header, navigation, and footer, and it renders `<Outlet />` in the middle. React Router puts the current page (Home, Favorites, Movie Detail, or Not Found) into that spot while the layout stays on screen.

```jsx
<main>
  <Outlet />
</main>
```

Because of `Outlet`, the header and footer do not have to be repeated in every page component.

## 4. Why does the favorites state live in `App.jsx` rather than only in `Home.jsx`?

Favorites are shared by several parts of the app. The header shows the number of favorites, the Home page adds and removes them, the Favorites page displays them, and the Movie Detail page can toggle them too.

If the state lived only in `Home.jsx`, the Favorites page and the header would not be able to read or update it. Keeping the state in their common parent, `App.jsx`, gives one source of truth. `App` passes the favorite IDs and the `toggleFavorite` function down through props so every page sees the same data and updates immediately.

This is called "lifting state up": when multiple components need the same changing data, it is moved to the closest shared parent.
