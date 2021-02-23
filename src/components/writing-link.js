import React from 'react';
import { Link }  from 'gatsby';

const WritingLink = ({post}) => (
  <>
  <Link to={post.frontmatter.path}>
  {post.frontmatter.title}
  </Link>
  </>  
)

export default WritingLink;