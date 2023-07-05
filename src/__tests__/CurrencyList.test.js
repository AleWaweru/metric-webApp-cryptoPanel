import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CurrencyList from '../Components/Main/CurrencyList';

describe('CurrencyList', () => {
  const currencies = [
    // currency data
  ];

  const query = '';
  const handleQuery = jest.fn();
  const handleKeyDown = jest.fn();

  it('renders the component correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <CurrencyList
          currencies={currencies}
          query={query}
          handleQuery={handleQuery}
          handleKeyDown={handleKeyDown}
        />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
