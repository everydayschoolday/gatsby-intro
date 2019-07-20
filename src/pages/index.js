import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <React.Fragment>
    <h1>Home!</h1>
    <h2>Hello Frontend Masters!</h2>
    <Link to="/about"> &rarr; About.</Link>
  </React.Fragment>
)
