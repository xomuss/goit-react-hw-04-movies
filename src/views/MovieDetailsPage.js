import React, { Component } from 'react';
import axios from '../utils/axios';
import { Route, NavLink } from 'react-router-dom';
import Reviews from '../components/Reviews';
import Cast from '../components/Cast';
import routes from '../routes';

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
              go back
            </button>
            <br />

            <img src={`${baseUrl}${backdrop_path}`} alt="1213"></img>
            <h2>{original_title}</h2>
            <p>{overview}</p>
            <p>{vote_average}</p>
            <ul>
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
