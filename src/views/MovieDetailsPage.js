import React, { Component } from 'react';
import axios from 'axios';

class MovieDetailsPage extends Component {
  state = {};

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=c2a3095b3c93af2cd3988a9dd6f9ca00&append_to_response=videos`,
    );

    response.then(res => console.log(res.data));
  }
  render() {
    return <h1>мтраница фильма</h1>;
  }
}

export default MovieDetailsPage;
