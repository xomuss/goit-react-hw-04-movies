import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './components/Cast';
import Reviews from './components/Reviews';
import NotFound from './views/NotFound';
import routes from './routes';
import AppBar from './components/AppBar';

const App = () => (
  <>
    <AppBar />

    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Route path={routes.moviesDetails} component={MovieDetailsPage} />
      <Route path={routes.moviesCast} component={Cast} />
      <Route path={routes.moviesReviews} component={Reviews} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews
