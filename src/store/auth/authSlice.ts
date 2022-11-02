import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../interface/appInterface';

interface AuthState {
  user: User | {};
  status: 'authenticated' | 'not-authenticated' | 'checking';
  errorMessage: string | undefined;
}

const initialState: AuthState = {
  user: {},
  errorMessage: undefined,
  status: 'checking',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, { payload }: PayloadAction<User>) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    },
    onChecking: state => {
      state.status = 'checking';
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }: PayloadAction<string | undefined>) => {
      state.errorMessage = payload;
      state.status = 'not-authenticated';
      state.user = {};
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const { onLogin, onChecking, onLogout, clearErrorMessage } = authSlice.actions;
