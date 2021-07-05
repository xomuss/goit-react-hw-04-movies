import React, { Component } from 'react';
import axios from '../utils/axios';
import { Route, NavLink } from 'react-router-dom';
import Reviews from '../components/Reviews';
import Cast from '../components/Cast';
import routes from '../routes';
import './MovieDetails.css';

class MovieDetailsPage extends Component {
  state = {
    baseUrl: 'https://image.tmdb.org/t/p/w500/',
    genres: null,
    id: null,
    original_title: null,
    overview: null,
    vote_average: null,
    backdrop_path: null,
    castList: null,
    reviewsData: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `movie/${movieId}?append_to_response=videos,images`,
    );
    this.setState({ ...response.data });

    const responseCast = await axios.get(
      `movie/${movieId}/credits?&language=en-US`,
    );
    this.setState({ castList: responseCast.data.cast });

    const responseReviews = await axios.get(
      `movie/${movieId}/reviews?&language=en-US&page=1`,
    );
    this.setState({ reviewsData: responseReviews.data.results });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    const { backdrop_path, baseUrl, original_title, overview, vote_average } =
      this.state;
    const { match } = this.props;

    return (
      <>
        {backdrop_path && (
          <>
            <button
              className="Back-btn"
              type="button"
              onClick={this.handleGoBack}
            >
              Go back
            </button>

            <div className="container">
              <img
                className="movie-img"
                src={`${baseUrl}${backdrop_path}`}
                alt={original_title}
              ></img>
              <div className="description-container">
                <h1>{original_title}</h1>
                <p>User score: {vote_average}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
              </div>
            </div>
            <ul className="add-inf">
              Additional information
              <li>
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/cast`,
                    state: this.props.location.state,
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/reviews`,
                    state: this.props.location.state,
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>

            <Route
              path={`${match.path}/cast`}
              render={props => (
                <Cast
                  {...props}
                  cast={this.state.castList}
                  url={this.state.baseUrl}
                />
              )}
            />
            <Route
              path={`${match.path}/reviews`}
              render={props => (
                <Reviews {...props} reviews={this.state.reviewsData} />
              )}
            />
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
