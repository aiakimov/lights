import Lights from "./Lights";
import Input from "./Input";
import { FC, useState } from "react";
import "./index.css";

interface Props {}

const App: FC<Props> = () => {
  const [size, setSize] = useState(30);
  const changeValue = (circleSize: number) => {
    if (size > 300) {
      setSize(300);
    } else {
      setSize(circleSize);
    }
  };
  const [amount, setAmount] = useState(30);
  const changeAmount = (circlesAmount: number) => {
    if (Number(amount) > 300) {
      setAmount(300);
    } else {
      setAmount(circlesAmount);
    }
  };

  return (
    <div className="wrapper">
      <Lights amount={amount} maxSize={size} />
      <div className="form">
        <Input
          type="number"
          label="max size"
          value={size}
          setValue={changeValue}
        />
        <Input
          type="number"
          label="amount"
          value={amount}
          setValue={changeAmount}
        />
      </div>
    </div>
  );
};

export default App;
