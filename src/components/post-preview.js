import React from 'react';
import { css } from '@emotion/core';
import ReadLink from '../components/read-link';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid teal;
      margin-top: 0.75rem;
      padding-bottom: 1rem;
    `}
  >
    <h3>
      <ReadLink to={post.slug}>{post.title}</ReadLink>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>Read the rest &rarr;</ReadLink>
    </h3>
  </article>
);

export default PostPreview;
