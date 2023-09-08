import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../features/navbar/navslice';
import questionReducer from '../features/question/questionslice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    question: questionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch