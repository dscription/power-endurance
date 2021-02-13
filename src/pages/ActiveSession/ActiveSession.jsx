import React, { useState, useEffect } from 'react';
import ActiveSessionWork from '../../components/ActiveSessionWork/ActiveSessionWork';

const ActiveSession = ({ session }) => {
  const [roundIndex, setRoundIndex] = useState(0);
  // const currentRound =
  return (
    <>{session && <ActiveSessionWork problems={session.initialProblems} />}</>
  );
};

export default ActiveSession;
