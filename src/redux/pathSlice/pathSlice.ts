import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SETTINGS_ROUTES } from '@/common/links-settings';

type PathStateType = {
  value: string;
  settings: string;
};

const initialState: PathStateType = {
  value: '/',
  settings: SETTINGS_ROUTES[0].path,
};

const pathSlice = createSlice({
  name: 'path',
  initialState,
  reducers: {
    setPath(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    setPathSettings(state, action: PayloadAction<string>) {
      state.settings = action.payload;
    },
  },
});

export const { setPath, setPathSettings } = pathSlice.actions;
export default pathSlice.reducer;
