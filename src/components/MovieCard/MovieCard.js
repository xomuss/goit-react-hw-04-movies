import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = (
  baseUrl,
  backdrop_path,
  original_title,
  overview,
  vote_average,
  match,
) => {
  return (
    <>
      {backdrop_path && (
        <>
          <img src={`${baseUrl}${backdrop_path}`} alt="1213"></img>
          <h2>{original_title}</h2>
          <p>{overview}</p>
          <p>{vote_average}</p>
          <ul>
            <li>
              <NavLink to={`${match}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${match}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default MovieCard;
