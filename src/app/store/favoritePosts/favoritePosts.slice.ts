import { createSlice /*, type PayloadAction*/ } from "@reduxjs/toolkit";
// import type { RootState } from "../Store";
// import type { IPost } from "../../types/Post";

// Define the initial state using that type
const initialState: number[] = [1, 2, 3];
//TODO persist favorite store
export const favoritePosts = createSlice({
    name: "favorites",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const postId = +action.payload;
            state.push(postId);
        },
        removeFavorite: (state, action) => {
            const postId = action.payload;
            const index = state.findIndex((id) => id === postId);
            state.splice(index, 1);
        },
        toggleFavorite: (state, action) => {
            const postId = action.payload;
            const index = state.findIndex((id) => id === postId);
            if (index !== -1) {
                // Remove from favorites
                state.splice(index, 1);
            } else {
                // Add to favorites
                state.push(postId);
            }
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
    },
});

export const { addFavorite, removeFavorite, toggleFavorite } =
    favoritePosts.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default favoritePosts.reducer;
