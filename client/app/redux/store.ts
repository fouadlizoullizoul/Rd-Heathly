'use client'
import {combineReducers} from 'redux'
import {alertsSlice} from './alertsReducer'
import { configureStore } from '@reduxjs/toolkit'
const rootReducer=combineReducers({
    alerts:alertsSlice.reducer,
})
const store =configureStore({
    reducer:rootReducer,
})
export type RootState=ReturnType<typeof store.getState>
export default store