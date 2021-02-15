import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import SelectGrade from '../SelectGrade/SelectGrade';
import SelectWall from '../SelectWall/SelectWall';
import { SessionContext } from '../../contexts/SessionContext';

const Problem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ProblemList = ({ problems }) => {
  const [sessionProblems, setSessionProblems] = useState(problems);
  const { updateProblems } = useContext(SessionContext);

  useEffect(() => {
    problems && setSessionProblems(problems);
  }, []);

  useEffect(() => {
    updateProblems(sessionProblems);
  }, [sessionProblems]);

  const updateSessionProblems = (value, index, type) => {
    console.log(value, index, type);

    const setWallType = () => {
      const newSessionProblems = [...sessionProblems];
      newSessionProblems[index].wall = value;
      setSessionProblems(newSessionProblems);
    };

    const setGrade = () => {
      const newSessionProblems = [...sessionProblems];
      newSessionProblems[index].grade = parseInt(value);
      setSessionProblems(newSessionProblems);
    };

    type === 'wall' ? setWallType() : setGrade();
  };

  return (
    <form>
      {sessionProblems &&
        sessionProblems.map((problem, index) => (
          // todo: Use css grid to create the correct table with inputs, html table tag should not be used for positioning.
          <Problem key={`problem${index}`}>
            <span>#{index + 1}</span>
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
