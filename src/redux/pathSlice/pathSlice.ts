import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SETTINGS_ROUTES } from '@/common/links-settings';
import { LINUX_ROUTES } from '@/common/links-linux';

type PathStateType = {
  value: string;
  settings: string;
  linux: string;
};

const initialState: PathStateType = {
  value: '/',
  settings: SETTINGS_ROUTES[0].path,
  linux: LINUX_ROUTES[0].path,
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
    setPathLinux(state, action: PayloadAction<string>) {
      state.linux = action.payload;
    },
  },
});

export const { setPath, setPathSettings, setPathLinux } = pathSlice.actions;
export default pathSlice.reducer;
