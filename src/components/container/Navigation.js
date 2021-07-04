import React from 'react';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to={routes.movies}>Movies</NavLink>
      <br />
      <NavLink to={routes.home}>Home</NavLink>
    </nav>
  );
};

export default Navigation;
