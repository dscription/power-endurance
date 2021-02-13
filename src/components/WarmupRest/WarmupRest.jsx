import React, { useContext } from 'react';
import Timer from 'react-compound-timer';
import { SessionContext } from '../../contexts/SessionContext';

const WarmupRest = ({ round, warmupRoundIndex }) => {
  const duration = 5000;

  const {
    setIsRest,
    setIsWork,
    session,
    setWarmup,
    setActiveSession,
  } = useContext(SessionContext);

  const warmupLength = session.warmup.rounds.length;
  // Todo: You need to consider the length of the rounds as you call these functions, otherwise you will hit the end of the array and error out.
  const switchToWork = () => {
    setIsRest(false);
    setIsWork(true);
  };

  const switchToActiveSession = () => {
    console.log('switching to active session');
    setWarmup(false);
    setActiveSession(true);
  };

  const checkIsWarmup = () => {
    warmupRoundIndex < warmupLength ? switchToWork() : switchToActiveSession();
  };

  return (
    // if round is less than the length of warmup rounds, render the following, otherwise, render a new timer to setup for the series
    warmupRoundIndex < warmupLength ? (
      <>
        <p>Up Next:</p>
        <p>Warmup Round {warmupRoundIndex + 1}</p>
        <Timer
          initialTime={duration}
          onPause={(value) => console.log(value)}
          formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
          direction="backward"
          checkpoints={[{ time: 0, callback: () => checkIsWarmup() }]}
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
    ) : (
      <>
        <p>Rest for your series</p>
        <Timer
          initialTime={1000}
          onPause={(value) => console.log(value)}
          formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
          direction="backward"
          checkpoints={[{ time: 0, callback: () => checkIsWarmup() }]}
        >
          {({ pause }) => (
            <>
              <p>
                <Timer.Minutes /> :&nbsp;
                <Timer.Seconds />
              </p>
            </>
          )}
        </Timer>
      </>
    )
  );
};

export default WarmupRest;
