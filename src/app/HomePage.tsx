// import { updatePostsUsername } from "../utils/getPosts";
import HeadComponent from "./components/HeadComponent";
// import { useEffect, useState } from "react";
// import { type IPost } from "../types/Post";
// import { type IUser } from "../types/User";
// import { getAllPosts } from "../utils/getPosts";
import { usePostsQuery, useUsersQuery } from "./store/Posts/Post.api";
import { getFetchMessage } from "../utils/FetchUtils";
import PostsComponent from "./components/PostsComponent";
import { useTypedSelector } from "./hooks/useTypesSelector";
import {
    filterPostsByAnything,
    filterPostsByIds,
    filterPostsByUserIds,
} from "../utils/searchPosts";
import type { IPost } from "../types/Post";
import SearchComponent from "./components/SearchComponent";
import { filterUsersByUserName } from "../utils/searchUsers";

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
    const {
        // isLoading: isLoadingUser,
        // isError: isErrorUser,
        // error: errorUser,
        data: users,
    } = useUsersQuery("");
    const { text: textQuery } = useTypedSelector(
        (state) => state.searchPostsQuery
    );
    function filterPost(posts: IPost[]): IPost[] {
        if (!posts) return [];
        if (textQuery.length === 0) return posts
        const summaryIds: number[] = [];
        const { Ids: postsByAnyIds } = filterPostsByAnything(posts, textQuery);
        summaryIds.push(...postsByAnyIds);
        if (users) {
            const {Ids: usersByNameIds } = filterUsersByUserName(
                users,
                textQuery
            );
            const { Ids: postsByUserNameIds } = filterPostsByUserIds(
                posts,
                usersByNameIds
            );
            summaryIds.push(...postsByUserNameIds);
        }
        const summarySet = new Set(summaryIds);
        const { posts: filtered } = filterPostsByIds(
            posts,
            Array.from(summarySet)
        );
        return filtered;
    }
    return (
        <>
            <HeadComponent page="Main Blog" />

            <SearchComponent />
            {posts ? (
                <PostsComponent posts={filterPost(posts)} />
            ) : (
                <>{getFetchMessage(isLoadingPosts, isErrorPosts, errorPosts)}</>
            )}
        </>
    );
}
