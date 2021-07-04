import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  state = { movies: '' };

  async componentDidMount() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=c2a3095b3c93af2cd3988a9dd6f9ca00',
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default HomePage;
