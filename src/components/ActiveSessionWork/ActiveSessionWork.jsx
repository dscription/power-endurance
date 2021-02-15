import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Timer from 'react-compound-timer';
import { Button, CircleRow, Circle } from '../styled/Components';
import ProblemsIndicator from '../ProblemsIndicator/ProblemsIndicator';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

const ProblemCircle = styled.div`
  border: 3px solid white;
  border-radius: 100px;
  margin: 0px auto;
  background-color: ${(props) => props.bg};
  width: 200px;
  height: 200px;
`;

const ActiveSessionWork = ({ activeRound, activeRoundIndex }) => {
  const duration = 180000;
  const { problems } = activeRound;

  const currentProblem = problems[0];
  return (
    <>
      <section>
        <h1>Round {activeRoundIndex + 1} : 0/50pts</h1>
        <ProblemsIndicator problems={problems} />
        <p>You have 3 minutes to complete the following problem and recover.</p>
        <ProblemCircle>
          <p style={{ fontSize: '50px' }}>V{currentProblem.grade}</p>
        </ProblemCircle>
        <p style={{ fontSize: '35px' }}>{currentProblem.wall}</p>

        <CountdownTimer duration={duration} />
        {/* <button>Send</button> */}
        <p>I assume you succeeded, if not press the Fall button.</p>
        <Button bg="#FF004B">Fall</Button>
      </section>
    </>
  );
};

export default ActiveSessionWork;
