import React, { useState } from 'react';

const SelectWall = ({ wall }) => {
  const [value, setValue] = useState(wall);

  const handleSelect = (event) => {
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
