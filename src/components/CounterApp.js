import React from "react";
import IncrementingCounter from "./IncCounter";

function CounterApp() {
  return (
    <div>
      <h2>Counter 1</h2>
      <IncrementingCounter step={1} delay={1000} max={10} />

      <br />

      <h2>Counter 2</h2>
      <IncrementingCounter step={2} delay={500} max={20} />

      <br />

      <h2>Counter 3</h2>
      <IncrementingCounter step={3} delay={200} max={30} />
    </div>
  );
}

export default CounterApp;
