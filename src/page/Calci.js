import React from "react";
import {
  MainContainer,
  Keys,
  Button,
  Input,
  CalcContainer,
} from "../style/calciStyle";

const Calci = () => {
  return (
    <>
      <MainContainer>
        <CalcContainer>
          <Input className="calculator-input">
            <div className="result">inp area</div>
          </Input>
          <Keys>
            <Button className="functions">AC</Button>
            <Button className="functions">+/-</Button>
            <Button className="functions">%</Button>
            <Button className="operators">÷</Button>
            <Button className="keycode">7</Button>
            <Button className="keycode">8</Button>
            <Button className="keycode">9</Button>
            <Button className="operators">*</Button>
            <Button className="keycode">4</Button>
            <Button className="keycode">5</Button>
            <Button className="keycode">6</Button>
            <Button className="operators">-</Button>
            <Button className="keycode">1</Button>
            <Button className="keycode">2</Button>
            <Button className="keycode">3</Button>
            <Button className="operators">+</Button>
            <Button className="keycode0">0</Button>
            <Button className="keycode">.</Button>
            <Button className="operators">=</Button>
          </Keys>
        </CalcContainer>
      </MainContainer>
    </>
  );
};
export default Calci;
