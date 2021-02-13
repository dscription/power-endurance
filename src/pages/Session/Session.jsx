import React, { useState, useEffect, useContext } from 'react';
import { Container } from '../../components/styled/Container';
import SessionSetup from '../SessionSetup/SessionSetup';
import Warmup from '../Warmup/Warmup';
import ActiveSession from '../ActiveSession/ActiveSession';
import { SessionContext } from '../../contexts/SessionContext';

const Session = ({ user }) => {
  const { warmup, sessionSetup, activeSession, session } = useContext(SessionContext);
  return (
    <Container>
      {user && sessionSetup && <SessionSetup user={user} />}
      {user && warmup && <Warmup />}
      {user && activeSession && <ActiveSession series={session.series}/>}
    </Container>
  );
};

export default Session;
