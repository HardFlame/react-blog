import { createSlice /*, type PayloadAction*/ } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: {text:string} = {text:''};

export const searchPostsQuery = createSlice({
    name: "searchPostsQuery",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeText: (state, action) => {
            const text = action.payload;
            state.text = JSON.stringify(text).slice(1,-1)
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
    },
});

export const { changeText } =
    searchPostsQuery.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default searchPostsQuery.reducer;
