'use client'
import {combineReducers} from 'redux'
import {alertsSlice} from './alertsReducer'
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userReducer'
const rootReducer=combineReducers({
    alerts:alertsSlice.reducer,
    user:userSlice.reducer
})
const store =configureStore({
    reducer:rootReducer,
})
export type RootState=ReturnType<typeof store.getState>
export default store