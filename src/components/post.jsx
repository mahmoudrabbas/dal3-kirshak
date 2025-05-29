import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
const Post = () => {
  const { id, name } = useParams();
  const [searchParams] = useSearchParams();

  console.log(id, name);
  console.log(searchParams.getAll("country"));

  return <h1>Post Page {id}</h1>;
};

export default Post;
