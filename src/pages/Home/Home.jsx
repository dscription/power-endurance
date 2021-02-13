import React, { useState, useEffect } from 'react';

const Home = ({ user }) => {
  

  const handleStartSession = () => {
    // todo: call service function to createSession, buildSession, and add to user model. Create Session will redirect me to the session component.
  }


  return (
    <>
      <h1>User Home</h1>
      <button onClick={handleStartSession}>New Session</button>
      <button>Stats</button>
    </>
  );
};

export default Home;
