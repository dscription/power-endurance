import ProblemTable from '../../components/ProblemTable/ProblemTable';

const SessionSetup = () => {
  return (
    <>
      <h1>Session Setup</h1>
      <p>
        Suggested problems based off of your onsight and limit grades. Feel free
        to adjust the grades and wall type for this session.
      </p>
      <ProblemTable />
    </>
  );
};

export default SessionSetup;
