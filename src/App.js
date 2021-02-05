import { user } from './SampleData';
import React, { useState, useEffect } from 'react';
import SessionSetup from './pages/SessionSetup/SessionSetup';
import { Container } from './components/styled/Container';

function App() {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    setUserData(user);
  }, [user]);

  return (
    <Container>
      {userData && <SessionSetup session={userData.session} />}
    </Container>
  );
}

export default App;
