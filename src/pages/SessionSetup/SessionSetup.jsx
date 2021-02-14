import React, { useState, useEffect, useContext } from 'react';
import ProblemList from '../../components/ProblemList/ProblemList';
import { SessionContext } from '../../contexts/SessionContext';
import { Button } from '../../components/styled/Components';

const SessionSetup = ({ user }) => {
  const {
    setSessionSetup,
    setWarmup,
    setInitialSession,
    setSession,
    session,
    problems,
    updateSession,
  } = useContext(SessionContext);

  const handleFlow = () => {
    updateSession();
    setSessionSetup(false);
    setWarmup(true);
    setInitialSession({ ...session });
  };

  return (
    session && (
      <>
        <h1>Session Setup</h1>
        <p>
          Suggested problems based off of your onsight and limit grades. Feel
          free to adjust the grades and wall type for this session.
        </p>
        <h2>{session.type}</h2>
        {problems && <ProblemList problems={problems} />}
        <Button bg="green" text="white" onClick={handleFlow}>
          Start Warmup
        </Button>
      </>
    )
  );
};

export default SessionSetup;
