import HeadComponent from "../components/HeadComponent";
import SearchComponent from "../components/SearchComponent";
import { useMemo } from "react";
import { type IPost } from "../../types/Post";
// import { type IUser } from "../types/User";
// import { getAllPosts } from "../../utils/getPosts";
import { useTypedSelector } from "../hooks/useTypesSelector";
import { usePostsQuery } from "../store/Posts/Post.api";
import { getFetchMessage } from "../../utils/FetchUtils";
import PostsComponent from "../components/PostsComponent";
// import { favoritePosts } from "../../store/favoritePosts/favoritePosts.slice";
//import "./css/HomePage.css";

export default function FavoritesPage() {
    const {
        isLoading: isLoadingPosts,
        isError: isErrorPosts,
        error: errorPosts,
        data: posts,
    } = usePostsQuery("");
    const favorites = useTypedSelector((state) => state.favorites);

    const favoritePosts: IPost[] = useMemo(() => {
        const favoritesSet = new Set(favorites);
        return posts?.filter((post) =>
            favoritesSet.has(post.id)
        );
    }, [favorites, posts]) || []
    return (
        <>
            <HeadComponent page="Favorites" />
            <SearchComponent />
            {favoritePosts !== undefined
                ? <PostsComponent posts={favoritePosts}/>
                : getFetchMessage(isLoadingPosts, isErrorPosts, errorPosts)}
        </>
    );
}
