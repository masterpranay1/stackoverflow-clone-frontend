import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../features/navbar/navslice';
import questionReducer from '../features/question/questionslice';
import authReducer from '../features/auth/authslice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    question: questionReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch