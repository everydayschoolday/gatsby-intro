import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Home!</h1>
      <p>Hello Frontend Masters!</p>
      <h2>Read the blog</h2>
      {posts.map(post => (
        <pre key={post.slug}>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </Layout>
  );
};
