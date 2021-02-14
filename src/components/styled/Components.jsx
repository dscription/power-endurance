import styled from 'styled-components';


// colors
const green = '#1ACC3C'
const blue = '#00AAFF'
const red = '#FF004B'
const darkBlue ='#2F4858'
const purpleGrey = '#607999'


export const Container = styled.main`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  text-align: center;
  align-items: center;
  padding: 0px 10px;
  min-height: 720px;
  max-width: 360px;
  margin: 0px auto;
  background-color: #607999
  /* this main container should also account for mobile first sizing. */
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
