
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface Friend{
    name:string
    contact:number
}

export interface FriendsState{
    friends:Array<Friend>
}

const initialState:FriendsState={
    friends:[]
}

export const friendsSlice=createSlice({
    name:"friends",
    initialState,
    reducers:{
        addFriend:(state,action:PayloadAction<Friend>)=>{
            state.friends.push({
                name:action.payload.name,
                contact:action.payload.contact
            })
        }
    },
    extraReducers:{}
})

export default friendsSlice.reducer
export const {addFriend} = friendsSlice.actions