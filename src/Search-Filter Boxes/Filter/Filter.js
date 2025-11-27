import React, { useState, useContext } from 'react';
import { CounterContext } from '../../App';
import './Filter.css';

const Filter = () => {
  const { setCount, count } = useContext(CounterContext);

  return (
    <div className='form-selector'>
      <select
        className="form-select"
        aria-label="Default select example"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
