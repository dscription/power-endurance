import React, { useState, useEffect } from 'react';
import Timer from 'react-compound-timer';



const CountdownTimer = ({ duration }) => {
  return (
    <Timer
      initialTime={duration}
      onPause={(value) => console.log(value)}
      formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
      // todo:When timer hits zero call increment round function.
      direction="backward"
    >
      {({}) => (
        <>
          <span>
            <Timer.Minutes /> :&nbsp;
            <Timer.Seconds />
          </span>
        </>
      )}
    </Timer>
  );
};

export default CountdownTimer;
