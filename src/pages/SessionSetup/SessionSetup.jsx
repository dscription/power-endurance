import React, { useState, useEffect, useContext } from 'react';
import ProblemList from '../../components/ProblemList/ProblemList';
import { SessionContext } from '../../contexts/SessionContext';

const SessionSetup = ({ user }) => {
  // const [session, setSession] = useState(null);
  const {
    buildSession,
    setSessionSetup,
    setWarmup,
    setInitialSession,
    setSession,
    session,
  } = useContext(SessionContext);

  const handleFlow = () => {
    setSessionSetup(false);
    setWarmup(true);
    setInitialSession({ ...session });
  };

  useEffect(() => {
    const session = buildSession(user.limit, user.onsight);
    setSession(session);
  }, []);

  return (
    session && (
      <>
        <h1>Session Setup</h1>
        <p>
          Suggested problems based off of your onsight and limit grades. Feel
          free to adjust the grades and wall type for this session.
        </p>
        <h2>{session.type}</h2>
        <ProblemList problems={session.initialProblems} />
        {/* //TODO: Start Warmup Button changes a state variable, and calls on a function to build the Rounds which will be passed to the Warmup component. */}
        <button onClick={handleFlow}>Start Warmup</button>
      </>
    )
  );
};

export default SessionSetup;
