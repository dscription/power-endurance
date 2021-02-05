import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SelectGrade from '../SelectGrade/SelectGrade';
import SelectWall from '../SelectWall/SelectWall';

const Problem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProblemList = ({ problems }) => {
  const [sessionProblems, setSessionProblems] = useState('');

  const updateSessionProblems = (value, index, type) => {
    type === 'wall'
      ? setSessionProblems(
          ...sessionProblems,
          (sessionProblems[index].wall = value)
        )
      : setSessionProblems(
          ...sessionProblems,
          (sessionProblems[index].grade = value)
        );
    console.log(sessionProblems);
  };

  useEffect(() => {
    setSessionProblems(problems);
  }, []);

  return (
    <form>
      {sessionProblems &&
        sessionProblems.map((problem, index) => (
          <Problem key={`problem${index}`}>
            <SelectGrade
              grade={problem.grade}
              index={index}
              updateSessionProblems={updateSessionProblems}
            />
            <SelectWall
              wall={problem.wall}
              index={index}
              updateSessionProblems={updateSessionProblems}
            />
          </Problem>
        ))}
    </form>
  );
};

export default ProblemList;
