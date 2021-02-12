import React, { useState, useEffect } from 'react';
import ProblemList from '../../components/ProblemList/ProblemList';

// ! These functions will be moved serverside to build the initial session
const buildSession = (limit, onsight) => {
  const warmup = buildWarmup(limit);
  const initialProblems = buildInitialProblems(onsight);
  buildInitialProblems(onsight);
  const session = {
    type: 'Power Endurance',
    initialProblems: initialProblems,
    warmup: warmup,
  };
  return session;
};

const buildWarmup = (limit) => {
  const numberOfRounds = 3;
  const round1 = { number: 1, grade: 1, numberOfProblems: limit / 1 };
  const round2 = { number: 2, grade: 2, numberOfProblems: limit / 2 };
  const round3 = { number: 3, grade: 3, numberOfProblems: limit / 3 };
  const warmup = { rounds: [round1, round2, round3] };
  return warmup;
};

const buildInitialProblems = (onsight) => {
  const numberOfProblems = 6;
  const problem = { grade: onsight - 1, wall: 'slab' };
  const initialProblems = [];
  for (let x = 0; x < numberOfProblems; x++) {
    initialProblems.push(problem);
  }
  return initialProblems;
};

const SessionSetup = ({
  user,
  setSessionSetup,
  setWarmup,
  setInitialSession,
}) => {
  const [session, setSession] = useState(null);

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
