import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppRoutes } from "@/common/routes";

type PathStateType = {
  value: string;
};

const initialState: PathStateType = {
  value: AppRoutes.HOME,
};

const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    setPath(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setPath } = pathSlice.actions;
export default pathSlice.reducer;