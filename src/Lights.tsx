import React, { ChangeEventHandler, FC, ReactNode } from "react";
import "./Lights.css";

interface Props {
  amount: number;
  maxSize: number;
  children?: React.ReactNode;
}
type amountLights = {
  number: number;
  size: string;
  async: string;
  positionX: string;
  positionY: string;
  opacity: number;
  animationDuration: string;
  backgroundColor: string;
}[];

type style = {
  width: string;
  height: string;
  animationDelay: string;
  top: string;
  left: string;
  opacity: number;
  animationDuration: string;
  backgroundColor: string;
};

const Lights: FC<Props> = ({ amount, maxSize }) => {
  function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
  function getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
  const amountLights: amountLights = [];

  for (let i: number = 1; i <= amount; i++) {
    amountLights.push({
      number: i,
      size: getRandomArbitrary(maxSize / 5, maxSize) + "px",
      async: getRandomInt(amount / 3) + "s",
      positionX: getRandomInt(window.innerWidth * 0.5 - maxSize / 2) + "px",
      positionY: `-${maxSize + 10}px`,
      opacity: getRandomArbitrary(0.5, 1),
      animationDuration: getRandomArbitrary(15, 30) + "s",
      backgroundColor: `rgb(${getRandomArbitrary(150, 200)},
       ${getRandomArbitrary(150, 200)},
       ${getRandomArbitrary(150, 200)})`,
    });
  }

  const snowItems = amountLights.map((el) => {
    const style: style = {
      width: el.size,
      height: el.size,
      top: el.positionY,
      left: el.positionX,
      animationDelay: el.async,
      opacity: el.opacity,
      animationDuration: el.animationDuration,
      backgroundColor: el.backgroundColor,
    };
    return <div className="lights-item" style={style} key={el.number}></div>;
  });

  return <div className="lights-wrapper">{snowItems}</div>;
};

export default Lights;
