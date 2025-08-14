// import { type IUser } from "../types/User";
// import { getAllPosts } from "../../utils/getPosts";
import { usePostsQuery } from "../store/Posts/Post.api";
import { getFetchMessage } from "../../utils/FetchUtils";
import { useParams } from "react-router";
import FullSizePostComponent from "../components/FullSizePostComponent";
// import { favoritePosts } from "../../store/favoritePosts/favoritePosts.slice";
//import "./css/HomePage.css";

export default function PostPage() {
    //TODO TagPage like this page
    const { postId = "" } = useParams();
    const {
        isLoading: isLoadingPosts,
        isError: isErrorPosts,
        error: errorPosts,
        data: posts,
    } = usePostsQuery(postId);
    // console.log('page',posts)
    return (
        <>
            {posts ? (
                <FullSizePostComponent postData={posts[0]} />
            ) : (
                <>{getFetchMessage(isLoadingPosts, isErrorPosts, errorPosts)}</>
            )}
        </>
    );
}
