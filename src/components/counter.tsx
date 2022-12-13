import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState<number>(1);
  const onOprClick = (type: string) => {
    if (type === "+") {
      setCounterValue(counterValue + 1);
    } else {
      counterValue <= 0
        ? setCounterValue(0)
        : setCounterValue(counterValue - 1);
    }
  };

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(counterValue));
    window.dispatchEvent(new Event("storage"));
  }, [counterValue]);

  return (
    <div className="inc-dec-counter">
      <button onClick={() => onOprClick("-")}>-</button>
      <h4 id="counterValue">{counterValue}</h4>
      <button onClick={() => onOprClick("+")}>+</button>
    </div>
  );
};

export default Counter;
