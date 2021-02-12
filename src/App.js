import { user } from './SampleData';
import { Route, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SessionSetup from './pages/SessionSetup/SessionSetup';
import { Container } from './components/styled/Container';
import Warmup from './pages/Warmup/Warmup';
import ActiveSession from './pages/ActiveSession/ActiveSession';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';
import authService from './services/authService';
import Onboarding from './pages/Onboarding/Onboarding';

function App() {
  const [user, setUser] = useState('');
  const [sessionSetup, setSessionSetup] = useState(true);
  const [activeSession, setActiveSession] = useState(null);
  const [initialSession, setInitialSession] = useState(null);
  const [warmup, setWarmup] = useState(null);

  // useEffect(() => {
  //   setUserData(user);
  // }, [user]);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Route
        exact
        path="/"
        render={() => (
          <Container>
            {/* {!user.limit && <Onboarding user={user} />} */}
            {user && warmup && (
              <Warmup
                warmup={initialSession.warmup}
                setWarmup={setWarmup}
                setActiveSession={setActiveSession}
              />
            )}
            {user && sessionSetup && (
              <SessionSetup
                user={user}
                setWarmup={setWarmup}
                setSessionSetup={setSessionSetup}
                setInitialSession={setInitialSession}
              />
            )}
            {user && activeSession && (
              <ActiveSession session={initialSession} />
            )}
          </Container>
        )}
      />
      <Route
        exact
        path="/signup"
        render={({ history }) => (
          <Signup history={history} handleSignupOrLogin={handleSignupOrLogin} />
        )}
      />
      <Route
        exact
        path="/login"
        render={({ history }) => (
          <Login history={history} handleSignupOrLogin={handleSignupOrLogin} />
        )}
      />
    </>
  );
}

export default App;
