import React, { ChangeEvent, FC, useState } from "react";
import "./Input.css";

interface PropsInput {
  type: string;
  label: string;
  value: number;
  setValue: (num: number) => void;
}

const Input: FC<PropsInput> = ({ type, label, value, setValue }) => {
  const [innerValue, setInnerValue] = useState("");
  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) > 100) {
      setInnerValue("100");
      event.target.value = "100";
    } else {
      setInnerValue(event.target.value);
    }
  };

  const onClick = () => {
    value = Number(innerValue);
    setValue(value);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        name={label}
        type={type}
        value={innerValue}
        onChange={changeValue}
        min="0"
        max="99"
      />
      <button onClick={onClick}>apply</button>
    </div>
  );
};

export default Input;
