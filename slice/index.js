import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  home: 0,
  // Profile: false,
  // Output: false,
};

const userData = createSlice({
  name: "home",
  // name: "Profile",
  // name: "Output",
  // name: "Input",
  // name: "Info",
  initialState,
  reducers: {
    openHome: (state) => {
     state.home += 1
    }
  }
});

export const { openHome } = userData.actions;
export default userData.reducer;