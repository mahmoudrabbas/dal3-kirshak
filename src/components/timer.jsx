import React, { useEffect, useState } from "react";
const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    function incre() {
      setTimer(timer + 1);
    }
    // console.log("timer useEffect");
    const interval = setInterval(incre, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  //   console.log("timer render");

  return <h1>Timer: {timer}</h1>;
};

export default Timer;
