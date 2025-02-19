import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); 
  const [isRunning, setIsRunning] = useState(true); 

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, [isRunning]); 

  const handleStop = () => setIsRunning(false); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador: {count}</h1>
      <button onClick={handleStop} disabled={!isRunning}>
        Parar Contador
      </button>
    </div>
  );
};

export default Counter;
