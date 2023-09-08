import { createSlice } from '@reduxjs/toolkit';

interface NavState {
  isSidebarOpen: boolean;
  activeLink: string;
}

const initialState: NavState = {
  isSidebarOpen: true,
  activeLink: 'Home'
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
      toggleSidebar: (state) => {
        state.isSidebarOpen = !state.isSidebarOpen;
      },
      setActiveLink: (state, action) => {
        state.activeLink = action.payload;
      }
    }
})

export const { toggleSidebar, setActiveLink } = navSlice.actions;
export default navSlice.reducer;
