import {TPassword} from '@app/types/Password';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type TPasswordsSlice = {
  passwords: TPassword[];
};

const initialState: TPasswordsSlice = {
  passwords: [],
};

const passwordsSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {
    setPasswordsGlobalStore(state, action: PayloadAction<TPassword[]>) {
      return {...state, passwords: action.payload};
    },
  },
});

export const {setPasswordsGlobalStore} = passwordsSlice.actions;
export default passwordsSlice.reducer;
