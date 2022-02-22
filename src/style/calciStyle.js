import styled from "styled-components";
export const MainContainer = styled.div `
  display: flex;
  justify-content: center;
  padding-top: 100px;
  height: 100vh;
  background-color: grey;
`;
export const Keys = styled.div `
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
    height: 50px;
  
  display: flex;
  outline: none;
  justify-content: center;
  align-items: center;
  
/* border-radius: 50px; */
  color: white;
  font-size: 22px;
  cursor: pointer;
  }
  .keycode0:hover {
    opacity: 0.7;
  }
  .operators {
    background-color: #fdaf20d9;

    font-size: 25px;
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
  }
  .operators:hover {
    opacity: 0.7;
  }
  .functions {
    background-color: #a39f9fde;
    color: black;
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
  }
  .functions:hover {
    opacity: 0.7;
  }
  .keycode {
    background-color: #323131;
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
  }
  .keycode:hover {
    opacity: 0.9;
  }
`;
export const Input = styled.form `
  /* width: 281px; */
  color: white;
  background-color: black;
  height: 100px;
  border: solid black 2px;
`;

export const InpAr = styled.div `
 
  .result {
  min-height: 3rem;
  color: white;
}
`;
export const CalcContainer = styled.div `
  border-radius: 8px;
  height: 100px;
  .calculator-input {
    color:whitesmoke;
  /* border-color: black;
  border: ridge; */
  text-align: right;
  padding-right: 10%;
  /* font-weight: ; */
  font-size: xx-large;
}

`;