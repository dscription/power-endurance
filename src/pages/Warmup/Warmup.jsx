import React, { useState, useContext, useEffect } from 'react';
import WarmupRest from '../../components/WarmupRest/WarmupRest';
import WarmupRound from '../../components/WarmupRound/WarmupRound';
import { SessionContext } from '../../contexts/SessionContext';

const Warmup = () => {
  const [warmupRound, setWarmupRound] = useState('');
  const [warmupRoundIndex, setWarmupRoundIndex] = useState(0);
  const { isWork, isRest, session } = useContext(SessionContext);

  useEffect(() => {
    const { warmup } = session;
    setWarmupRound(warmup.rounds[warmupRoundIndex]);
  }, [warmupRoundIndex]);

  const incrementWarmupRoundIndex = () => {
    setWarmupRoundIndex((prevRoundIndex) => prevRoundIndex + 1);
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
        />
      )}
    </>
  );
};

export default Warmup;
