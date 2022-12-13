import React, { useEffect, useState } from "react";

type Props = {
  counterConstant: number;

  type: "Multiply" | "Divide" | "Subtract";
};
const opeator = {
  Multiply: "*",
  Divide: "/",
  Subtract: "-",
};

const SecondCounter = ({ counterConstant, type }: Props) => {
  const [counterValue, setcounterValue] = useState<number>(1);

  //the function calls everytime there's change in local storage
  const changeInLocalStorage = (window.onstorage = () => {
    let items: any = localStorage.getItem("counterValue");
    setcounterValue(items);
  });

  const calculateResult = (): number => {
    if (type === "Multiply") return counterConstant * counterValue;
    else if (type === "Divide")
      return parseFloat((counterConstant / counterValue).toFixed(2));
    else if (type === "Subtract") return counterConstant - counterValue;
    else return 0;
  };

  return (
    <div className="counter-hoc">
      <h4>
        {counterConstant}
        {opeator[type]}
        {counterValue}
      </h4>
      <div className="counter-hoc-result">{calculateResult()}</div>
    </div>
  );
};

export default SecondCounter;
