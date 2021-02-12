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

  // useEffect(() => {
  //   setUserData(user);
  // }, [user]);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
    // this.setState({ user: authService.getUser() });
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
            {/* {user && <Warmup session={userData.session}/>} */}
            {user && <SessionSetup user={user} />}
            {/* {user && <ActiveSession session={userData.session} />} */}
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
