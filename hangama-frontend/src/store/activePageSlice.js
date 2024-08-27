import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  activePage:"",
  isLoading:false
}

export const checkActivePage = createAsyncThunk('activePage', async (payload, thunkAPI) => {
    try {
        console.log(payload,'page');
          if (payload !== "") {
              return payload
          } else {
              return thunkAPI.rejectWithValue(payload)
          }
      } catch (e) {
          console.log("Error", payload)
          return thunkAPI.rejectWithValue(payload)
      }
});

export const activePageSlice = createSlice({
  name: 'activePage',
  initialState,
  reducers: {
    // logout(state){
    //     console.log(state)
    // //   localStorage.removeItem('token');
    //   state.activePage="jnxfknh";
    // }
  },
  extraReducers: builder => {
    // check active page
    builder.addCase(checkActivePage.pending, state => {
        state.isLoading = true;
      });

      builder.addCase(checkActivePage.fulfilled,(state, { payload }) => {
      state.activePage = payload;
      state.isLoading = false;
    })

    builder.addCase(checkActivePage.rejected, state => {
        state.isLoading = true;
      })
  }
})

export const { logout } = activePageSlice.actions

export default activePageSlice.reducer