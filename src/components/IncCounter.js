import React, { useState, useEffect } from "react";

function IncCounter({ step, delay, max }) {
  const [count, setCount] = useState(0);

  // Effect to handle delayed increment or decrement
  useEffect(() => {
    let timer;
    const handleIncrement = () => {
      timer = setTimeout(() => {
        setCount((prevCount) => Math.min(prevCount + step, max));
      }, delay);
    };
    const handleDecrement = () => {
      timer = setTimeout(() => {
        setCount((prevCount) => Math.max(prevCount - step, 0));
      }, delay);
    };
    const clearTimer = () => clearTimeout(timer);

    return () => clearTimer();
  }, [count, delay, max, step]);

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + step, max));
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - step, 0));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default IncCounter;
