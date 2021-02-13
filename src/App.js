import { user } from './SampleData';
import { Route, Redirect } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';
import authService from './services/authService';
import Onboarding from './pages/Onboarding/Onboarding';
import SessionContextProvider from './contexts/SessionContext';
import Home from './pages/Home/Home';
import Session from './pages/Session/Session';
function App() {
  const [user, setUser] = useState('');

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
        render={() => (user.limit ? <Home user={user} /> : <Onboarding />)}
      />
      <Route
        exact
        path="/session"
        render={() =>
          user.limit ? (
            <SessionContextProvider user={user}>
              <Session user={user} />
            </SessionContextProvider>
          ) : (
            <Onboarding user={user} />
          )
        }
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
