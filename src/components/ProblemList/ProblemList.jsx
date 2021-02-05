import styled from 'styled-components';

// const List = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProblemList = ({ problems }) => {
  return (
    <form>
      {problems.map((problem, idx) => (
        <Row key={idx}>
          <select value={problem.grade}>
            <option value="0">V0</option>
            <option value="1">V1</option>
            <option value="2">V2</option>
            <option value="3">V3</option>
            <option value="4">V4</option>
            <option value="5">V5</option>
            <option value="6">V6</option>
            <option value="7">V7</option>
            <option value="8">V8</option>
          </select>
          <select value={problem.wall}>
            <option value="slab">Slab</option>
            <option value="15">15 Degrees</option>
            <option value="30">30 Degrees</option>
            <option value="45">45 Degrees</option>
            <option value="barrel">Barrel</option>
          </select>
          
        </Row>
      ))}
    </form>
  );
};

export default ProblemList;
