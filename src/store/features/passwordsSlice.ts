import {TStoredPassword} from '@app/types/Password';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type TPasswordsSlice = {
  passwords: TStoredPassword[];
};

const initialState: TPasswordsSlice = {
  passwords: [],
};

const passwordsSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {
    setPasswordsGlobalStore(state, action: PayloadAction<TStoredPassword[]>) {
      return {...state, passwords: action.payload};
    },
  },
});

export const {setPasswordsGlobalStore} = passwordsSlice.actions;
export default passwordsSlice.reducer;
