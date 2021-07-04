import React from 'react';

const Cast = ({ cast, url }) => {
  return (
    <ul>
      {cast.map(el => (
        <li key={el.id}>
          <img height="150" src={`${url}${el.profile_path}`} alt="actor"></img>
          {el.name}
        </li>
      ))}
    </ul>
  );
};

export default Cast;
