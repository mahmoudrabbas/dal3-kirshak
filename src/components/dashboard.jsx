import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Logic is done");
    navigate("/about", { state: "come from navigate in dashbodard" });
  };
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleClick} className="btn btn-light">
        Visit Home
      </button>
    </>
  );
};

export default Dashboard;
