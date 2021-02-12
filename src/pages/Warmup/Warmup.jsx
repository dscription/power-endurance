import React, { useState, useEffect } from 'react';
import WarmupRest from '../../components/WarmupRest/WarmupRest';
import WarmupRound from '../../components/WarmupRound/WarmupRound';

const Warmup = ({ warmup }) => {
  const [roundIndex, setRoundIndex] = useState(0);
  const [isRest, setIsRest] = useState(null);
  const [isWork, setIsWork] = useState(true);

  const { rounds } = warmup;
  const currentRound = rounds[roundIndex];
  return (
    <>
      {/* // !Starting to look like a good reason to create a context to track the session or round info? */}
      {isWork && !isRest && (
        <WarmupRound
          round={currentRound}
          setRoundIndex={setRoundIndex}
          setIsRest={setIsRest}
          setIsWork={setIsWork}
        />
      )}
      {isRest && !isWork && (
        <WarmupRest
          round={currentRound}
          setRoundIndex={setRoundIndex}
          setIsRest={setIsRest}
          setIsWork={setIsWork}
        />
      )}
    </>
  );
};

export default Warmup;
