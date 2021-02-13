import React, { useState, useContext } from 'react';
import WarmupRest from '../../components/WarmupRest/WarmupRest';
import WarmupRound from '../../components/WarmupRound/WarmupRound';
import { SessionContext } from '../../contexts/SessionContext';

const Warmup = () => {
  const { isWork, isRest} = useContext(SessionContext);

  



  return (
    <>
      {isWork && !isRest && <WarmupRound />}
      {isRest && !isWork && <WarmupRest />}
    </>
  );
};

export default Warmup;
