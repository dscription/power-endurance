import React, { useState } from 'react';

const SelectGrade = ({ grade }) => {
  const [value, setValue] = useState(grade);

  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <select value={value} onChange={handleSelect}>
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
  );
};

export default SelectGrade;
