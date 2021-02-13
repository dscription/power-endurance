import React, { useState, useEffect, createContext } from 'react';
import * as sessionAPI from '../services/sessionService';

export const SessionContext = createContext();

const SessionContextProvider = ({ children, user }) => {
  const [session, setSession] = useState('');
  const [problems, setProblems] = useState('');

  const [sessionSetup, setSessionSetup] = useState(true);
  const [activeSession, setActiveSession] = useState(null);
  const [initialSession, setInitialSession] = useState(null);
  const [warmup, setWarmup] = useState(null);
  const [isRest, setIsRest] = useState(null);
  const [isWork, setIsWork] = useState(true);

  const { sessions } = user;

  useEffect(() => {
    sessionAPI.getOne(sessions[0]).then((sessionData) => {
      setSession(sessionData);
      setProblems(sessionData.initialProblems);
    });
  }, []);

  

  const updateProblems = async (sessionProblems) => {
    setProblems(sessionProblems);
  };

  const updateSession = async () => {
    const updatedSession = { ...session };
    updatedSession.series = [...problems];
    const newSession = await sessionAPI.update(updatedSession);
  };

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
        isRest,
        setIsRest,
        isWork,
        setIsWork,
        session,
        // setSession,
        updateProblems,
        problems,
        setProblems,
        updateSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
