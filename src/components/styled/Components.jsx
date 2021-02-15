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
  background-color: #607999;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100%;
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.text};
`;

export const CircleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Circle = styled.div`
  border: 1px solid black;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  text-align: center;
  /* align-items: center; */
`;

export const TimerBox = styled.div`
  border: 5px solid #1acc3c;
  border-radius: 50px;
  color: #1acc3c;
  height: 40vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
