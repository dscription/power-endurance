import React, { useContext } from 'react';
import Timer from 'react-compound-timer';
import { SessionContext } from '../../contexts/SessionContext';

const WarmupRest = ({ round, incrementWarmupRoundIndex }) => {
  const duration = 5000;

  const { setIsRest, setIsWork } = useContext(SessionContext);
  const { number } = round;

  // Todo: You need to consider the length of the rounds as you call these functions, otherwise you will hit the end of the array and error out.
  const switchToWork = () => {
    setIsRest(false);
    setIsWork(true);
  };

  return (
    <>
      <p>Up Next:</p>
      <p>Warmup Round {number}</p>
      <Timer
        initialTime={duration}
        onPause={(value) => console.log(value)}
        formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
        direction="backward"
        checkpoints={[{ time: 0, callback: () => switchToWork() }]}
      >
        {({ pause }) => (
          <>
            <p>
              <Timer.Minutes /> :&nbsp;
              <Timer.Seconds />
            </p>
            <button onClick={pause}>Pause / Extend Rest</button>
          </>
        )}
      </Timer>
    </>
  );
};

export default WarmupRest;
