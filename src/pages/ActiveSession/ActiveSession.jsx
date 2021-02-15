import React, { useState, useEffect, useContext } from 'react';
import ActiveSessionWork from '../../components/ActiveSessionWork/ActiveSessionWork';
import { SessionContext } from '../../contexts/SessionContext';

const ActiveSession = ({ series }) => {
  const [activeRoundIndex, setActiveRoundIndex] = useState(0);
  const activeRound = series[activeRoundIndex]

  return <>
  {console.log(activeRound)}
  {series && <ActiveSessionWork activeRound={activeRound} activeRoundIndex={activeRoundIndex} />}
  </>;
};

export default ActiveSession;
