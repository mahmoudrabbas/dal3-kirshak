import React from "react";
import { Outlet } from "react-router-dom";
const Posts = () => {
  return (
    <>
      <h1>Posts Layout</h1>
      <Outlet />
    </>
  );
};

export default Posts;
