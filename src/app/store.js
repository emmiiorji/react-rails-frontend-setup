import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './components/greeting/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;
