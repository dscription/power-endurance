import React, { useState, useEffect } from 'react';
import WarmupRest from '../../components/WarmupRest/WarmupRest';
import WarmupRound from '../../components/WarmupRound/WarmupRound';

const Warmup = ({ session }) => {
  return (
    <>
      {/* <WarmupRound /> */}
      <WarmupRest />
    </>
  );
};

export default Warmup;
