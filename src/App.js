import { user } from './SampleData';
import React, {useState} from 'react';
import SessionSetup from './pages/SessionSetup/SessionSetup';

function App() {
  const [userData, setUserData] = useState(user)
  return (
    <div>
      {userData.name}
      <SessionSetup />
    </div>
  );
}

export default App;
