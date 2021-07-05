import React from 'react';
import './Cast.css';

const Cast = ({ cast, url }) => {
  return (
    <ul>
      {cast.map(el => (
        <li key={el.id}>
          <img height="150" src={`${url}${el.profile_path}`} alt="actor"></img>
          <p>Name: {el.name}</p>
          <p>Character: {el.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
