import React, { useState, useEffect } from 'react';
import Timer from 'react-compound-timer';

const WarmupRest = () => {
  return (
    <>
      <p>Up Next:</p>
      <p>Warmup Round 2</p>
      <Timer
        initialTime={300000}
        onPause={(value) => console.log(value)}
        formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
        direction="backward"
      >
        {({}) => (
          <>
            <p>
              <Timer.Minutes /> :&nbsp;
              <Timer.Seconds />
            </p>
          </>
        )}
      </Timer>
      <button>Pause / Extend Rest</button>
    </>
  );
};
 
export default WarmupRest;
