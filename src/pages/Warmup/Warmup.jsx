import React, { useState, useEffect } from 'react';
import Timer from 'react-compound-timer';

const Warmup = ({ session }) => {
  // const [round,setRound] = useState(0)
  const [roundTime, setRoundTime] = useState(0);

  return (
    <>
      <h1>Warmup: Round 1 </h1>
      <p>Climb 6 x v0 or v1 with minimal rest between climbs and click next.</p>
      <Timer initialTime={1000} onPause={(value) => console.log(value)}>
        {({ state, pause, getTime }) => (
          <>
            {/* //TODO: Build timer that counts up. */}
            <p>
              <Timer.Seconds />
              {/* {console.log(getTime())} */}
            </p>
            {/* //TODO: Onclick should set the state roundtime to total time elapsed, will be in miliseconds so make sure to translate accordingly if necessary. It should also reset the timer to 0 for the next round, should also change the value of the round state variable to move to a rest period or the next round.*/}
            <button
              onClick={() => {
                const time = getTime();
                setRoundTime(time);
                pause();
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

export default Warmup;
