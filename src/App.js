import { user } from './SampleData';
import React, { useState, useEffect } from 'react';
import SessionSetup from './pages/SessionSetup/SessionSetup';
import { Container } from './components/styled/Container';
import Warmup from './pages/Warmup/Warmup';

function App() {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    setUserData(user);
  }, [user]);

  return (
    <Container>
      {userData && <Warmup session={userData.session}/>}
      {/* {userData && <SessionSetup session={userData.session} />} */}
    </Container>
  );
}

export default App;
