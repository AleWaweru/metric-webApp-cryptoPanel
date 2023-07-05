import React from 'react';
import { render } from '@testing-library/react';
import DetailsView from '../Components/Main/DetailView';

describe('DetailsView', () => {
  const props = {
    marketCapRank: 1,
    currentPrice: 40000,
    marketCap: 800000000,
    marketCapChange24h: 20000000,
    high24h: 45000,
    low24h: 35000,
    priceChange24h: 5000,
    priceChangePercentage24h: 10,
    marketCapChangePercentage24: 2,
    ath: 50000,
    athChangePercentage: 25,
    atl: 30000,
    atlChangePercentage: -10,
    fullyDilutedValuation: 1000000000,
    totalVolume: 100000,
    totalSupply: 50000000,
    circulatingSupply: 40000000,
    maxSupply: 60000000,
    publicInterestScore: 8,
  };

  it('renders the component correctly', () => {
    const { container } = render(
      <DetailsView
        marketCapRank={props.marketCapRank}
        currentPrice={props.currentPrice}
        marketCap={props.marketCap}
        marketCapChange24h={props.marketCapChange24h}
        high24h={props.high24h}
        low24h={props.low24h}
        priceChange24h={props.priceChange24h}
        priceChangePercentage24h={props.priceChangePercentage24h}
        marketCapChangePercentage24={props.marketCapChangePercentage24}
        ath={props.ath}
        athChangePercentage={props.athChangePercentage}
        atl={props.atl}
        atlChangePercentage={props.atlChangePercentage}
        fullyDilutedValuation={props.fullyDilutedValuation}
        totalVolume={props.totalVolume}
        totalSupply={props.totalSupply}
        circulatingSupply={props.circulatingSupply}
        maxSupply={props.maxSupply}
        publicInterestScore={props.publicInterestScore}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
