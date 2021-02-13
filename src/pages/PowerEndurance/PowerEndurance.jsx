import React, { useState, useEffect, useContext } from 'react';
import { Container } from '../../components/styled/Container';
import SessionSetup from '../SessionSetup/SessionSetup';
import Warmup from '../Warmup/Warmup';
import ActiveSession from '../ActiveSession/ActiveSession';
import { SessionContext } from '../../contexts/SessionContext';

const PowerEndurance = ({ user }) => {
  const { warmup, sessionSetup, activeSession } = useContext(SessionContext);
  return (
    <Container>
      {user && sessionSetup && <SessionSetup user={user} />}
      {user && warmup && <Warmup />}
      {user && activeSession && <ActiveSession />}
    </Container>
  );
};

export default PowerEndurance;
