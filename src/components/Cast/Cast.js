import React from 'react';

const Cast = ({ cast }) => {
  return (
    <ul>
      {cast.map(el => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
};

export default Cast;
