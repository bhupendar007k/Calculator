import styled from "styled-components";
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  height: 100vh;
  background-color: grey;
`;
export const Keys = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  background-color: black;
  height: 300px;
  width: 285px;
  padding: 10px 0px 0px 0px;
  gap: 0px 5px;
  /* border-radius 5px; */
  .keycode0 {
    grid-column-start: 1;
    grid-column-end: 3;
    width: 119px;
    border-radius: 20px;
    outline: none;
    border: none;
    background-color: #323131;
  }
  .keycode0:hover {
    opacity: 0.7;
  }
  .operators {
    background-color: #fdaf20d9;

    font-size: 25px;
  }
  .operators:hover {
    opacity: 0.7;
  }
  .functions {
    background-color: #a39f9fde;
    color: black;
  }
  .functions:hover {
    opacity: 0.7;
  }
  .keycode {
    background-color: #323131;
  }
  .keycode:hover {
    opacity: 0.9;
  }
`;
export const Input = styled.form`
  width: 281px;
  color: white;
  background-color: black;
  height: 100px;
  border: solid black 2px;
`;
export const Button = styled.button`
  height: 50px;
  width: 50px;
  display: flex;
  outline: none;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 22px;
  cursor: pointer;
`;
export const InpAr = styled.input`
  width: 277px;
  color: white;
  background-color: black;
  height: 100px;
  outline: none;
  font-size: larger;
  display: flex;
  border: none;
`;
export const CalcContainer = styled.div`
  border-radius: 8px;
  height: 100px;
`;
