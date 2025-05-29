import React, { useEffect } from "react";
const Counter = (props) => {
  useEffect(() => {
    // console.log("useEffect");
    return () => {
      //   console.log("Removed " + props.counter.name);
    };
  }, []);

  //   console.log("return");
  return (
    <>
      <h1>{props.counter.name}</h1>
      <p>Counter: {props.counter.count}</p>
      <button
        onClick={() => props.handleCounterIncrement(props.counter.id)}
        className="btn btn-success btn-sm m-2 p-1"
      >
        +
      </button>

      <button
        onClick={() => props.handleCounterRemove(props.counter.id)}
        className="btn btn-danger btn-sm m-2 p-1"
      >
        Remove
      </button>
    </>
  );
};

export default Counter;
