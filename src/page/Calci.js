import React from "react";
import  { useState, useEffect } from "react";
import  Button from "../CalculatorKey";
import {
  MainContainer,
  Keys,
  Input,
  InpAr,
  CalcContainer,
} from "../style/calciStyle";

const Calci = () => {
    const [prevValue, setPrevValue] = useState(null);
    const [nextValue, setNextValue] = useState("0");
    const [op, setOp] = useState(null);
  
    useEffect(() => {}, [op, nextValue, prevValue]);
  
    const CalculatorOperations = {
      "/": (firstValue, secondValue) => firstValue / secondValue,
      "*": (firstValue, secondValue) => firstValue * secondValue,
      "+": (firstValue, secondValue) => firstValue + secondValue,
      "-": (firstValue, secondValue) => firstValue - secondValue,
      "=": (secondValue) => secondValue
    };
  
    const performOperation = () => {
      let temp = CalculatorOperations[op](
        parseFloat(prevValue),
        parseFloat(nextValue)
      );
      setOp(null);
      setNextValue(String(temp));
      setPrevValue(null);
    };
  
    const handleNum = (number) => {
      setNextValue(nextValue === "0" ? String(number) : nextValue + number);
    };
  
    const insertDot = () => {
      if (!/\./.test(nextValue)) {
        setNextValue(nextValue + ".");
      }
    };
    const percentage = () => {
      setNextValue(parseFloat(nextValue) / 100);
      if (prevValue && nextValue === "") {
        setPrevValue(parseFloat(prevValue) / 100);
      }
    };
    const changeSign = () => {
      setNextValue(parseFloat(nextValue) * -1);
    };
    const clearData = () => {
      setNextValue("0");
      setPrevValue(0);
    };
  
    const handleOperation = (value) => {
      if (Number.isInteger(value)) {
        handleNum(parseInt(value, 10));
      } else if (value in CalculatorOperations) {
        if (op === null) {
          setOp(value);
          setPrevValue(nextValue);
          setNextValue("");
        }
        if (op) {
          setOp(value);
        }
        if (prevValue && op && nextValue) {
          performOperation();
        }
      } else if (value === "c") {
        clearData();
      } else if (value === "\xB1") {
        changeSign();
      } else if (value === ".") {
        insertDot();
      } else if (value === "%") {
        percentage();
      }
    };
  
  return (
    <>
      <MainContainer>
        <CalcContainer>
          <Input className="calculator-input">
            <InpAr className="result">{nextValue}</InpAr>
          </Input>
          <Keys>
            <Button className="functions" keyValue={"c"} onClick={handleOperation}>AC</Button>
            <Button className="functions" keyValue={"\xB1"} onClick={handleOperation}>+/-</Button>
            <Button className="functions" keyValue={"%"} onClick={handleOperation}>%</Button>
            <Button className="operators"  keyValue={"/"} onClick={handleOperation}>÷</Button>
            <Button className="keycode" keyValue={7} onClick={handleOperation}>7</Button>
            <Button className="keycode" keyValue={8} onClick={handleOperation}>8</Button>
            <Button className="keycode" keyValue={9} onClick={handleOperation}>9</Button>
            <Button className="operators" keyValue={"*"} onClick={handleOperation}>*</Button>
            <Button className="keycode" keyValue={4} onClick={handleOperation}> 4</Button>
            <Button className="keycode" keyValue={5} onClick={handleOperation}>5</Button>
            <Button className="keycode" keyValue={6} onClick={handleOperation}>6</Button>
            <Button className="operators" keyValue={"-"} onClick={handleOperation}>-</Button>
            <Button className="keycode" keyValue={1} onClick={handleOperation}>1</Button>
            <Button className="keycode" keyValue={2} onClick={handleOperation}>2</Button>
            <Button className="keycode" keyValue={3} onClick={handleOperation}>3</Button>
            <Button className="operators" keyValue={"+"} onClick={handleOperation}>+</Button>
            <Button className="keycode0" keyValue={0}
            onClick={handleOperation}>0</Button>
            <Button className="keycode" keyValue={"."}
            onClick={handleOperation}>.</Button>
            <Button className="operators" keyValue={"="} onClick={handleOperation}>=</Button>
          </Keys>
        </CalcContainer>
      </MainContainer>
    </>
  );
};
export default Calci;
