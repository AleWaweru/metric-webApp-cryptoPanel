import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../Components/Main/SearchBar';

describe('SearchBar', () => {
  const value = 'Bitcoin';
  const onChange = jest.fn();
  const onKeyDown = jest.fn();
  const onSearchButtonClick = jest.fn();

  it('should render the component correctly', () => {
    const { container } = render(
      <SearchBar
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onSearchButtonClick={onSearchButtonClick}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
