import React, { useState, useEffect } from 'react';
import * as sessionAPI from '../../services/sessionService'

const Home = ({ user }) => {
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

  const handleStartSession = () => {
    const session = buildSession(user.limit, user.onsight);
    sessionAPI.create(session)
    // todo: call service function to createSession, buildSession, and add to user model. Create Session will redirect me to the session component.
  };

  return (
    <>
      <h1>User Home</h1>
      <button onClick={handleStartSession}>New Session</button>
      <button>Stats</button>
    </>
  );
};

export default Home;
