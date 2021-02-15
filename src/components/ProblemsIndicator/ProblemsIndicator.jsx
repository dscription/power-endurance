import React, { useState, useEffect } from 'react';
import { Circle, CircleRow } from '../styled/Components';

const ProblemsIndicator = ({ problems }) => {
  return (
    <CircleRow>
      {problems.map((problem, index) => (
        // todo: give circle a background color property and render correct color dependant on whether or not it is previous circle, current circle, or future circle. Should be a styled SFC.
        <Circle key={index} bg={'gray'}>
          <p>V{problem.grade}</p>
        </Circle>
      ))}
    </CircleRow>
  );
};

export default ProblemsIndicator;
