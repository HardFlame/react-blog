import { createSlice /*, type PayloadAction*/ } from "@reduxjs/toolkit";
import type { IUser } from "../../../types/User";
// import type { RootState } from "../Store";
// import type { IPost } from "../../types/Post";

// Define the initial state using that type
const initialState: {[k:number]:IUser} = {}

export const userMap = createSlice({
    name: "userMap",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        updateUserMap: (state: {[k:number]:IUser}, action) => {
            // console.log('action',action)
            const user:IUser = action.payload;
            // console.log('u!',user)
            // // state.set(user.id,user)
            // console.log('id',user.id)
            // state = Object.assign(state,{[+user.id]:user})
            // state = {...state,{[+user.id]:user}}
            // state.value 
            // state[+user.id] = user
            // console.log('state',state)
        },

        // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
    },
});

export const { updateUserMap /*, incrementByAmount*/ } =
    userMap.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userMap.reducer;
