import React, { useState, useEffect } from 'react';

const Onboarding = ({ name }) => {
  const [onsight, setOnsight] = useState(0);
  const [limit, setLimit] = useState(0);
  return (
    <>
      <h1>Onboarding</h1>
      <h2>Welcome {name}</h2>
      <p>What grade can you consistently onsight?</p>
      <select
        name="onsight"
        value={onsight}
        onChange={(event) => setOnsight(event.target.value)}
      >
        <option value={0}>V0</option>
        <option value={1}>V1</option>
        <option value={2}>V2</option>
        <option value={3}>V3</option>
        <option value={4}>V4</option>
        <option value={5}>V5</option>
        <option value={6}>V6</option>
        <option value={7}>V7</option>
        <option value={8}>V8</option>
      </select>
      <p>What grade would you consider to be your Limit? (projecting)</p>
      <select
        name="limit"
        value={limit}
        onChange={(event) => setLimit(event.target.value)}
      >
        <option value={0}>V0</option>
        <option value={1}>V1</option>
        <option value={2}>V2</option>
        <option value={3}>V3</option>
        <option value={4}>V4</option>
        <option value={5}>V5</option>
        <option value={6}>V6</option>
        <option value={7}>V7</option>
        <option value={8}>V8</option>
      </select>
    </>
  );
};

export default Onboarding;
