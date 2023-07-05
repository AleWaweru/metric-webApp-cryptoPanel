import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ({
  value, onChange, onKeyDown, onSearchButtonClick,
}) => {
  const handleButtonClick = () => {
    onSearchButtonClick(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        placeholder="Search"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onSearchButtonClick: PropTypes.func.isRequired,
};

export default SearchBar;
