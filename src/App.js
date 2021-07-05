import './App.css';
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
// import Cast from './components/Cast';
// import Reviews from './components/Reviews';
import NotFound from './views/NotFound';
import routes from './routes';
import AppBar from './components/AppBar';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const Cast = lazy(() =>
  import('./components/Cast' /* webpackChunkName: "cast-page" */),
);
const Reviews = lazy(() =>
  import('./components/Reviews' /* webpackChunkName: "reviews-page" */),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.moviesDetails} component={MovieDetailsPage} />
        <Route path={routes.moviesCast} component={Cast} />
        <Route path={routes.moviesReviews} component={Reviews} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </>
);

export default App;
// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews
