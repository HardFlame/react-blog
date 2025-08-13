import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {favoritePosts} from "./favoritePosts/favoritePosts.slice";
import { postApi } from "./Posts/Post.api";
import { searchPostsQuery } from "./searchQuery/searchPostsQuery.slice";
// import { userMap } from "./Users/Users.slice";
// ...
const reducers = combineReducers({
    [favoritePosts.name]: favoritePosts.reducer,
    // [userMap.name]: userMap.reducer,
    [searchPostsQuery.name]: searchPostsQuery.reducer,
    [postApi.reducerPath]: postApi.reducer
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware)
    // reducer: {
    //     posts: postsReducer,
    //     users: usersReducer,
    //     favorites: favoritePosts,
    // },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
