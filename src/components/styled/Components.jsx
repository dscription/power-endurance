import styled from 'styled-components';

// colors
// const green = '#1ACC3C'
// const blue = '#00AAFF'
// const red = '#FF004B'
// const darkBlue ='#2F4858'
// const purpleGrey = '#607999'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 720px;
  width: 360px;
  margin: 0px auto;
  border: 5px solid red;

  /* this main container should also account for mobile first sizing. */
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #607999;
  height: 100%;
  width: 100%;
  color: white;
`;

export const Button = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.text};
  border-radius: 10px;
  width: 150px;
  height: 50px;
  font-size: 20px;
`;

export const CircleRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Circle = styled.div`
  border: 3px solid white;
  border-radius: 50px;
  background-color: ${props => props.bg};
  margin: 0px 5px;
  width: 40px;
  height: 40px;
  text-align: center;
  
`;

export const TimerBox = styled.div`
  border: 10px solid #1acc3c;
  border-radius: 50px;
  color: #1acc3c;
  height: 25vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

export const SelectionBox = styled.button`
  width: 80%;
  height: 100px;
  border-radius: 25px;
  color: white;
  background-color: ${(props) => props.bg};
  font-size: 30px;
`;

export const Select = styled.select`
  width: 100px;
  padding: 5px;
`;
