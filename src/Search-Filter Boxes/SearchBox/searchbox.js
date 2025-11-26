import React, { useEffect } from 'react';
import './searchbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CounterContext } from '../../App';
const Searchbox = () => {
  const { search, setSearch } = useContext(CounterContext);
  const handleChange = (event) => {
    setSearch(event.target.value);
  }
  return (
    <div className="searchbox">
      <input type="text" placeholder="Search for country..." className="search-input" value={search}
        onChange={handleChange} />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

export default Searchbox;

