import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency, searchCurrency } from '../Redux/coinDetailSlice';
import CurrencyList from '../Components/Main/CurrencyList';

const Home = () => {
  const currencies = useSelector((state) => state.Currencies.Currencies);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  const handleQuery = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!query) {
        dispatch(fetchCurrency());
        return;
      }
      dispatch(searchCurrency(query)).then(() => {
        setQuery('');
      });
    }
  };

  const handleSearchButtonClick = () => {
    if (query) {
      dispatch(searchCurrency(query)).then(() => {
        setQuery('');
      });
    }
  };

  return (
    <div>
      <CurrencyList
        currencies={currencies}
        query={query}
        handleQuery={handleQuery}
        handleKeyDown={handleKeyDown}
        handleSearchButtonClick={handleSearchButtonClick}
      />
    </div>
  );
};

export default Home;
