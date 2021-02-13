import React, { useState, useContext, useEffect } from 'react';
import WarmupRest from '../../components/WarmupRest/WarmupRest';
import WarmupRound from '../../components/WarmupRound/WarmupRound';
import { SessionContext } from '../../contexts/SessionContext';

const Warmup = () => {
  const [warmupRound, setWarmupRound] = useState('');
  const [warmupRoundIndex, setWarmupRoundIndex] = useState(0);
  const { isWork, isRest, session } = useContext(SessionContext);

  const { warmup } = session;
  

  useEffect(() => {
    setWarmupRound(warmup.rounds[warmupRoundIndex]);
  }, [warmupRoundIndex]);

  const incrementWarmupRoundIndex = () => {
    warmupRoundIndex  < warmup.rounds.length
      ? setWarmupRoundIndex((prevRoundIndex) => prevRoundIndex + 1)
      : console.log('no more warmup');
  };

  return (
    <>
      {isWork && !isRest && (
        <WarmupRound
          round={warmupRound}
          incrementWarmupRoundIndex={incrementWarmupRoundIndex}
        />
      )}
      {isRest && !isWork && (
        <WarmupRest
          round={warmupRound}
          incrementWarmupRoundIndex={incrementWarmupRoundIndex}
          warmupRoundIndex={warmupRoundIndex}
        />
      )}
    </>
  );
};

export default Warmup;
