import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar/Navbar';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Navbar component', () => {
  beforeEach(() => {
    useSelector.mockClear();
  });

  test('renders correctly when on Cryptopanel page', () => {
    useSelector.mockReturnValue({
      CurrencyDetails: {
        name: 'Bitcoin',
        symbol: 'BTC',
      },
    });

    render(
      <Router>
        <Navbar />
      </Router>,
    );

    const navbarElement = screen.getByRole('navigation'); // Replace 'getByRole' with the appropriate element to identify your navigation component
    expect(navbarElement).toMatchSnapshot();
  });

  test('renders correctly when not on Cryptopanel page', () => {
    useSelector.mockReturnValue({
      CurrencyDetails: {
        name: 'Ethereum',
        symbol: 'ETH',
      },
    });

    render(
      <Router>
        <Navbar />
      </Router>,
    );

    const navbarElement = screen.getByRole('navigation'); // Replace 'getByRole' with the appropriate element to identify your navigation component
    expect(navbarElement).toMatchSnapshot();
  });
});
