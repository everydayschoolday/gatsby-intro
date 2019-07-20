import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home!</h1>
    <h2>Hello Frontend Masters!</h2>
    <Link to="/about"> &rarr; About.</Link>
  </Layout>
);
