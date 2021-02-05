import styled from 'styled-components';
import SelectGrade from '../SelectGrade/SelectGrade';
import SelectWall from '../SelectWall/SelectWall';

// const List = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const Problem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProblemList = ({ problems }) => {
  
  return (
    <form>
      {problems.map((problem, idx) => (
        <Problem key={`problem${idx}`}>
          <SelectGrade grade={problem.grade} />
          <SelectWall wall={problem.wall} />
        </Problem>
      ))}
    </form>
  );
};

export default ProblemList;
