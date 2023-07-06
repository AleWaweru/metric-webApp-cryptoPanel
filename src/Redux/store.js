import { configureStore } from '@reduxjs/toolkit';
import panelReducer from './panelSlice';
import CurrencyReducer from './coinDetailSlice';

const store = configureStore({
  reducer: {
    CurrencyDetails: panelReducer,
    Currencies: CurrencyReducer,
  },
});

export default store;
