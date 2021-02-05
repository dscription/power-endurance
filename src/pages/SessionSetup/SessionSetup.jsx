import ProblemList from '../../components/ProblemList/ProblemList';

const SessionSetup = ({ session }) => {
  return (
    <>
      <h1>Session Setup</h1>
      <p>
        Suggested problems based off of your onsight and limit grades. Feel free
        to adjust the grades and wall type for this session.
      </p>
      <h2>{session.date}</h2>
      <ProblemList rounds={session.rounds} />
    </>
  );
};

export default SessionSetup;
