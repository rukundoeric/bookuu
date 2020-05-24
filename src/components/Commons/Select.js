import React from 'react';

const Select = ({ defaultTxt, options }) => (
  <select className="selectpicker" data-live-search="true">
    <option value="" disabled selected>
      {defaultTxt}
    </option>
    {options}
  </select>
);
export default Select;
