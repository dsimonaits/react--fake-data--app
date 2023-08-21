import React from "react";
import { useParams } from "react-router";

const PostByID = () => {
  const post = useParams();

  return <div>Post page by ID {post.id}</div>;
};

export default PostByID;
