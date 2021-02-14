import styled from 'styled-components';

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
  /* this main container should also account for mobile first sizing. */
`;

export const Button = styled.button``;
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
