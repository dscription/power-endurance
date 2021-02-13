import React, { useState, useEffect } from 'react';

const SelectWall = ({ wall, updateSessionProblems, index }) => {
  const [value, setValue] = useState(wall);

  useEffect(() => {
    updateSessionProblems(value, index, 'wall');
  }, [value]);

  const handleSelect = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };
  return (
    <select value={value} onChange={handleSelect}>
      <option value="slab">Slab</option>
      <option value="15">15 Degrees</option>
      <option value="30">30 Degrees</option>
      <option value="45">45 Degrees</option>
      <option value="barrel">Barrel</option>
    </select>
  );
};

export default SelectWall;
