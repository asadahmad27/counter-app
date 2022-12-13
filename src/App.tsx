import React from "react";
import "./App.css";
import Counter from "./components/counter";
import SecondCounter from "./components/second-counter";

function App() {
  return (
    <div className="layout">
      <h3>Counter App</h3>
      <SecondCounter counterConstant={6} type={"Divide"} key={"Divide"} />
      <SecondCounter counterConstant={-5} type={"Multiply"} key={"multiply"} />
      <SecondCounter counterConstant={4} type={"Subtract"} key={"subtracy"} />
      <Counter />
    </div>
  );
}

export default App;
