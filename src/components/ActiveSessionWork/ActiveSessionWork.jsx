import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Timer from 'react-compound-timer';

const CircleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Circle = styled.div`
  border: 1px solid black;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  text-align: center;
  /* align-items: center; */
`;

const ActiveSessionWork = ({ activeRound, activeRoundIndex }) => {
  const duration = 180000;
  const {problems} = activeRound

  const currentProblem = problems[0];
  return (
    <>
      <p>session #1/20</p>
      <p>Previous Session Points: 50</p>
      <p>Session Goal: 0/50pts</p>
      <h1>Round {activeRoundIndex + 1}</h1>
      <CircleRow>
        {problems.map((problem, index) => (
          // todo: give circle a background color property and render correct color dependant on whether or not it is previous circle, current circle, or future circle. Should be a styled SFC.
          <Circle>
            <p>V{problem.grade}</p>
          </Circle>
        ))}
      </CircleRow>
      <p>You have 3 minutes to complete the following problem and recover.</p>
      <p>V{currentProblem.grade}</p>
      <p>{currentProblem.wall}</p>
      {/* // ! countdown timer */}
      <Timer
        initialTime={duration}
        onPause={(value) => console.log(value)}
        formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
        direction="backward"
      >
        {({}) => (
          <>
            <p>
              <Timer.Minutes /> :&nbsp;
              <Timer.Seconds />
            </p>
          </>
        )}
      </Timer>
      <button>Send</button>
      <button>Fall</button>
    </>
  );
};

export default ActiveSessionWork;
