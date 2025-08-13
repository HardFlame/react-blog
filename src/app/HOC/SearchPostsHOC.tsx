import FilterComponent from "../components/FilterComponent";
import SearchComponent from "../components/SearchComponent";
import { useTypedSelector } from "../hooks/useTypesSelector";
// import { usePostsQuery } from "../store/Posts/Post.api";
// import PostsComponent from "../components/PostsComponent";
// import { getFetchMessage } from "../../utils/FetchUtils";
import { useEffect, type ReactElement } from "react";
import type { IPost } from "../../types/Post";

export default function SearchPostsHOC({
    children,
}: {
    children: ReactElement<{ posts: IPost[] }>;
}) {
    //TODO sure search can't work from here?
    const { text: textQuery } = useTypedSelector(
        (state) => state.searchPostsQuery
    );
    useEffect(() => {
        if (children.props.posts) {
            // const posts = children.props.posts;
            // console.log("Hi!", posts, textQuery);
            // const filtered = posts.filter((post)=>{
            //     return !!(post.title.match(textQuery))
            // })
            // console.log(filtered)
            // posts.splice(0, posts.length, ...filtered);
        }
    }, [textQuery,children.props.posts]);
    return (
        <>
            <SearchComponent />
            <FilterComponent />
            {children}
        </>
    );
}
