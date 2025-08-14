// import { type IUser } from "../types/User";
// import { getAllPosts } from "../../utils/getPosts";
import { useUsersQuery } from "../store/Posts/Post.api";
import { getFetchMessage } from "../../utils/FetchUtils";
import { useParams } from "react-router";
import FullSizeUserComponent from "../components/FullSizeUserComponent";
import PostsComponent from "../components/PostsComponent";
import SearchPosts from "../HOC/SearchPostsHOC";
import { usePostsQuery } from "../store/Posts/Post.api";
// import { favoritePosts } from "../../store/favoritePosts/favoritePosts.slice";
//import "./css/HomePage.css";

export default function UserPage() {
    const { userId = "" } = useParams();
    const {
        isLoading: isLoadingUsers,
        isError: isErrorUsers,
        error: errorUsers,
        data: users,
    } = useUsersQuery(userId);
    const {
            isLoading: isLoadingPosts,
            isError: isErrorPosts,
            error: errorPosts,
            data: posts,
        } = usePostsQuery(""); //TODO rework query to accept id/userId
    // console.log('page',posts)
    return (
        <>
            {users ? (
                <FullSizeUserComponent userData={users[0]} />
            ) : (
                <>{getFetchMessage(isLoadingUsers, isErrorUsers, errorUsers)}</>
            )}
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
