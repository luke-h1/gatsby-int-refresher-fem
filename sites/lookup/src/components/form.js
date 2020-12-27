import React, { useState } from 'react';
import { navigate } from 'gatsby';
const Form = () => {
  const [value, setValue] = useState('');
  const handleInput = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    const query = value
      .toLowerCase()
      .trim()
      .replace(/[^\w ]/g, '')
      .replace(/\s+/g, '');

    navigate(`/search/${query}`, { state: { query } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Search by name
        <input type="text" name="name" value={value} onChange={handleInput} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
export default Form;
