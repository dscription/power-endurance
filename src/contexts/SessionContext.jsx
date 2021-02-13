import React, { useState, useEffect, createContext } from 'react';

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [sessionSetup, setSessionSetup] = useState(true);
  // const [session, setSession] = useState('');
  const [activeSession, setActiveSession] = useState(null);
  const [initialSession, setInitialSession] = useState(null);
  const [warmup, setWarmup] = useState(null);
  const [roundIndex, setRoundIndex] = useState(0);
  const [isRest, setIsRest] = useState(null);
  const [isWork, setIsWork] = useState(true);
  

  // ! Variables
   

  // ! These functions will be moved serverside to build the initial session
  const buildSession = (limit, onsight) => {
    const warmup = buildWarmup(limit);
    const initialProblems = buildInitialProblems(onsight);
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

  const incrementRoundIndex = () => {
    setRoundIndex((prevRoundIndex) => prevRoundIndex + 1);
  };

  return (
    <SessionContext.Provider
      value={{
        warmup,
        setWarmup,
        initialSession,
        setInitialSession,
        activeSession,
        setActiveSession,
        sessionSetup,
        setSessionSetup,
        buildSession,
        roundIndex,
        setRoundIndex,
        isRest,
        setIsRest,
        isWork,
        setIsWork,
        incrementRoundIndex,
        // rounds,
        // session,
        // setSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
