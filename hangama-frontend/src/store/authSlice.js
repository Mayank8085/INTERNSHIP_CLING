import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { data } from 'autoprefixer';
import * as services from '../services';
import {setAccessToken} from '../services/api-kit';
import {isJwtExpired} from '../utils';

const token = localStorage.getItem('token');
const isLoggedIn = !isJwtExpired(token);
const initialState = {
  isLoggedIn,
  isLoading: false,
  token: isLoggedIn?token:undefined,
  user: undefined,
  isError: false,
  errorMessage: ''
}

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
    const token = localStorage.getItem('token');
    const isLoggedIn = !isJwtExpired(token);
    if (isLoggedIn) {
      return { token, isLoggedIn, user: null };
    }
  
    return { token: null,isLoggedIn, user: null };
});

export const login = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
    try {
      console.log('Login service called')
        const {data, status} = await services.login(payload);
        console.log({data,status});
        if (status === 200) {
            localStorage.setItem("token", data.token);
            setAccessToken(data.token)
            return data
        } else {
            return thunkAPI.rejectWithValue(data)
        }
    } catch (e) {
        console.log("Error", e.response.data)
        return thunkAPI.rejectWithValue(e.response.data)
    }
})

export const register = createAsyncThunk('auth/register', async (payload, thunkAPI) => {
    try {
        const response = await services.register(payload);
        if (response.status === 200) {
            localStorage.setItem("token", data.token);
            setAccessToken(data.token)
            return data
        } else {
            return thunkAPI.rejectWithValue(data)
        }
    } catch (e) {
        console.log("Error", e.response.data)
        return thunkAPI.rejectWithValue(e.response.data)
    }
})


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state){
      localStorage.removeItem('token');
      state.isLoggedIn=false;
    }
  },
  extraReducers: builder => {
    // check auth
    builder.addCase(checkAuth.pending, state => {
        state.isLoading = true;
      });

      builder.addCase(checkAuth.fulfilled,(state, { payload }) => {
      const { token = null, user = null } = payload;
      state.user = user;
      state.token = token;
      state.isLoggedIn = !!token;
      state.isLoading = false;
    })

    builder.addCase(checkAuth.rejected, state => {
        state.isLoading = true;
      })



    // login
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, {payload}) => {
      console.log('payload', payload);
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state,{payload}) => {
        console.log('payload', payload);
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = payload.message;
    });

    // register
    builder.addCase(register.pending, state => {
        state.isLoading = true;
      });
      builder.addCase(register.fulfilled, (state, {payload}) => {
        Toast.show(action.payload.message);
        state.data = action.payload.data;
        state.params = action.meta.arg;
        state.isLoading = false;
      });
      builder.addCase(register.rejected, (state,{payload}) => {
          console.log('payload', payload);
          state.isLoading = false;
          state.isError = true;
          state.errorMessage = payload.message;
      });
  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer