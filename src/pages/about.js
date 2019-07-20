import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About Me</h1>
    <h2>This is a new Gatsby website.</h2>

    <Link to="/"> &larr; Home</Link>
  </Layout>
);
