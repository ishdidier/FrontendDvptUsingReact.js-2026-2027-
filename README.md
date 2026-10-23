# Movie Browser

A beginner-friendly movie catalog built with React and Vite. Browse eight local movies,
search by title or genre, open a detail page for each movie, and save favorites. The
favorites list is stored in `localStorage`, so it survives a page refresh.

All movie information comes from `src/data/movies.js`. The app does not use a backend,
an external movie API, or image hosting, so it works offline after dependencies are
installed.

## Technologies Used

- React 19
- Vite
- JavaScript with JSX
- React Router DOM
- HTML and CSS
- `useState` and `useEffect`
- Local JavaScript data (`src/data/movies.js`)
- Git and GitHub for version control
- Netlify or Vercel for deployment

## Installation

1. Make sure Node.js is installed (a recent version, such as Node 20.19+ or newer, is recommended).
2. Open a terminal in the project folder.
3. Install the dependencies:

```bash
npm install
```

## Start the Development Server

```bash
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Build the Application

```bash
npm run build
```

The production files are written to the `dist` folder. You can preview the build locally:

```bash
npm run preview
```

You can also check the code with:

```bash
npm run lint
```

## Deployment

### Netlify

This project is ready for Netlify. The included `public/_redirects` file contains:

```text
/* /index.html 200
```

That rule lets React Router handle routes such as `/favorites` and `/movie/1` when the
page is refreshed or opened directly, instead of returning a 404 from the host.

To deploy:

1. Push the project to a GitHub repository.
2. Log in to Netlify and choose **Add new site** → **Import an existing project**.
3. Connect the repository.
4. Use these build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Deploy the site.

Alternatively, run `npm run build` and drag the generated `dist` folder into Netlify's
manual deploy area.

### Vercel (optional)

1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Vercel should detect Vite. Use `npm run build` as the build command and `dist` as the
   output directory.
4. If direct visits to routes such as `/movie/1` return a 404, add a rewrite from all
   paths to `/index.html` in the Vercel project settings.

No live deployment URL is provided in this repository yet. Add your own URL here after
you have deployed and checked the site:

- Live site: `<add your deployed URL>`
- Repository: `<add your GitHub repository URL>`

## Main Project Structure

```text
movie-browser/
├── public/
│   ├── _redirects
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   └── MovieCard.jsx
│   ├── data/
│   │   └── movies.js
│   ├── pages/
│   │   ├── Favorites.jsx
│   │   ├── Home.jsx
│   │   ├── MovieDetail.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── answers.md
├── index.html
├── package.json
└── README.md
```

## Routes

| Route          | Page         |
| -------------- | ------------ |
| `/`            | Home         |
| `/favorites`   | Favorites    |
| `/movie/:id`   | Movie Detail |
| `*`            | Not Found    |
