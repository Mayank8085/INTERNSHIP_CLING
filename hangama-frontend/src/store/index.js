import { configureStore } from '@reduxjs/toolkit'
import activePageReducer from './activePageSlice';
// slices
import authReducer from './authSlice';
import commonReducer from './commonReducer';
export default configureStore({
  reducer: {
    auth: authReducer,
    activePage: activePageReducer,
    commonReducer
  },
})