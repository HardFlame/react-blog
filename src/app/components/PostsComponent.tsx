import type { IPost } from "../../types/Post";
import { useTypedSelector } from "../hooks/useTypesSelector";
import MiniPostComponent from "./MinPostComponent";

export default function PostsComponent({ posts }: { posts: IPost[] }) {
    const favorites = useTypedSelector((state) => state.favorites);
    const favoritesSet = new Set(favorites);

    return (
        <>
            {posts.map((postData) => (
                <MiniPostComponent
                    key={postData.id}
                    postData={postData}
                    isFavorite={favoritesSet.has(postData.id)}
                />
            ))}
        </>
    );
}
