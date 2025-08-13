// import { updatePostsUsername } from "../utils/getPosts";
import HeadComponent from "./components/HeadComponent";
// import { useEffect, useState } from "react";
// import { type IPost } from "../types/Post";
// import { type IUser } from "../types/User";
// import { getAllPosts } from "../utils/getPosts";
import { usePostsQuery } from "./store/Posts/Post.api";
import { getFetchMessage } from "../utils/FetchUtils";
import PostsComponent from "./components/PostsComponent";
import SearchPosts from "./HOC/SearchPostsHOC";
// import { useEffect } from "react";
// import type { IUser } from "../types/User";
// import { useTypedSelector } from "./hooks/useTypesSelector";
//import "./css/HomePage.css";

export default function HomePage() {
    const {
        isLoading: isLoadingPosts,
        isError: isErrorPosts,
        error: errorPosts,
        data: posts,
    } = usePostsQuery("");
    return (
        <>
            <HeadComponent page="Main Blog" />

            <SearchPosts>
                {posts ? (
                    <PostsComponent posts={posts} />
                ) : (
                    <>
                        {getFetchMessage(
                            isLoadingPosts,
                            isErrorPosts,
                            errorPosts
                        )}
                    </>
                )}
            </SearchPosts>
        </>
    );
}
