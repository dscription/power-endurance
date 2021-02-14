import React, { useState, useContext } from 'react';
import Timer from 'react-compound-timer';
import { SessionContext } from '../../contexts/SessionContext';
import {TimerBox} from '../styled/Components'

import styled from 'styled-components';



const WarmupRound = ({ round, incrementWarmupRoundIndex }) => {
  const [roundTime, setRoundTime] = useState(0);
  const { setIsWork, setIsRest } = useContext(SessionContext);

  const { number } = round;

  return (
    <>
      <h1>Warmup: Round {number} </h1>
      <p>Climb 6 x v0 or v1 with minimal rest between climbs and click next.</p>
      {/* Timer counting up. */}
      <Timer
        initialTime={1000}
        onPause={(value) => console.log(value)}
        formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
      >
        {({ state, pause, getTime }) => (
          <>
            <TimerBox>
              <p>
                <Timer.Minutes /> :&nbsp;
                <Timer.Seconds />
              </p>
            </TimerBox>

            {/* // Todo: Onclick should set the state roundtime to total time elapsed, will be in miliseconds so make sure to translate accordingly if necessary. It should also reset the timer to 0 for the next round, should also change the value of the round state variable to move to a rest period or the next round.*/}
            <button
              onClick={() => {
                const time = getTime();
                setRoundTime(time);
                pause();
                setIsWork(false);
                setIsRest(true);
                incrementWarmupRoundIndex();
              }}
            >
              Next
            </button>
          </>
        )}
      </Timer>
    </>
  );
};

export default WarmupRound;
