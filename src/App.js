import { user } from './SampleData';
import React, { useState } from 'react';
import SessionSetup from './pages/SessionSetup/SessionSetup';
import { Container } from './components/styled/Container';

function App() {
  const [userData, setUserData] = useState(user);
  return (
    <Container>
      <SessionSetup />
    </Container>
  );
}

export default App;
