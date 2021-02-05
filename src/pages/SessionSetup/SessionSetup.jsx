import ProblemList from '../../components/ProblemList/ProblemList';

const SessionSetup = ({ session }) => {
  const { date, rounds, type, initialProblems } = session;
  return (
    <>
      <h1>Session Setup</h1>
      <p>
        Suggested problems based off of your onsight and limit grades. Feel free
        to adjust the grades and wall type for this session.
      </p>
      <h2>{type}</h2>
      <ProblemList problems={initialProblems} />
    </>
  );
};

export default SessionSetup;
