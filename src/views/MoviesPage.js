import React, { Component } from 'react';
import axios from '../utils/axios';
import { Link } from 'react-router-dom';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    page: 1,
  };

  async componentDidMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);

    if (params.has('query')) {
      const locationQuery = params.get('query');
      const data = await this.makeRequest(this.state.page, locationQuery);
      this.setState({ movies: data.results });
    }
  }

  makeRequest = async (page, value) => {
    const params = new URLSearchParams({
      page: page,
      query: value,
      language: 'en-US',
    });

    const response = await axios.get(`search/movie?${params.toString()}`);

    return response.data;
  };

  handleChange = evt => {
    this.setState({ query: evt.target.value });
  };

  handleSubmit = async evt => {
    evt.preventDefault();

    this.props.history.push({
      search: `?query=${this.state.query}`,
    });

    const data = await this.makeRequest(this.state.page, this.state.query);
    this.setState({ movies: data.results });
  };

  render() {
    const { query, movies } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Movie
            <input
              type="text"
              value={query}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">search</button>
        </form>

        {movies && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                      from: {
                        search: `${this.props.location.search}`,
                        pathname: this.props.location.pathname,
                      },
                    },
                  }}
                >
                  {movie.original_title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
