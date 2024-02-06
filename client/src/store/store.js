import {connfigureStore} from '@reduxjs/toolkit'
import authSlice from '../authSlice'
const store = connfigureStore({
    reducers:{
        auth:authSlice,
    }
})
export default store;