import React, { useState, useEffect, useContext } from 'react';
import SessionSetup from '../SessionSetup/SessionSetup';
import Warmup from '../Warmup/Warmup';
import ActiveSession from '../ActiveSession/ActiveSession';
import { SessionContext } from '../../contexts/SessionContext';

const Session = ({ user }) => {
  const { warmup, sessionSetup, activeSession, session } = useContext(SessionContext);
  return (
    <>
      {user && sessionSetup && <SessionSetup user={user} />}
      {user && warmup && <Warmup />}
      {user && activeSession && <ActiveSession series={session.series}/>}
    </>
  );
};

export default Session;
