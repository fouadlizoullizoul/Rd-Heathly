'use client'
import { createSlice } from '@reduxjs/toolkit'
interface Notification {
  message: string;
  onClickPath: string;
}
interface User {
    _id:string
    name: string;
    email: string;
    isAdmin:boolean;
    seenNotifications:Notification[];
    unseenNotifications:Notification[]
  }
  interface UserState {
    user: User | null;
  }
  const initialState: UserState = {
    user: null,
  };
  
export const userSlice =createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state,action) => {
            state.user=action.payload
    }
}
})
export const {setUser} =userSlice.actions

export default userSlice.reducer