import React, { useState, useEffect } from 'react';
import ActiveSessionWork from '../../components/ActiveSessionWork/ActiveSessionWork';

const ActiveSession = ({session}) => {
  const currentRound = session.rounds[0]
  return ( <>
    <ActiveSessionWork problems={currentRound.problems} />
  </> );
}
 
export default ActiveSession;