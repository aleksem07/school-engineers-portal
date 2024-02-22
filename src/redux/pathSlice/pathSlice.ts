import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type PathStateType = {
  value: string;
};

const initialState: PathStateType = {
  value: '/',
};

const pathSlice = createSlice({
  name: 'path',
  initialState,
  reducers: {
    setPath(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setPath } = pathSlice.actions;
export default pathSlice.reducer;
