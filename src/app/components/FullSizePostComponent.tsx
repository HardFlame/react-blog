import { NavLink } from "react-router";
import { type IPost } from "../../types/Post";
import { getPrettyTime } from "../../utils/timeUtils";
import TagComponent from "./TagComponent";
import PostAuthorComponent from "./PostAuthorComponent";
import PostFavoriteComponent from "./PostFavoriteComponent";
// import { useTypedSelector } from "../hooks/useTypesSelector";

export default function FullSizePostComponent({
    postData,
    isFavorite,
}: {
    postData: IPost;
    isFavorite?: boolean;
}) {
    const title = postData.title;
    // const author = postData.userName;
    const postId = postData.id;
    const authorId = postData.userId;
    // const {} = useTypedSelector(state=>state)

    const tags = postData.tags || [];
    const content = postData.body;

    const createdTime = postData.createdTime;
    const prettyTime = createdTime ? getPrettyTime(createdTime) : "error date";

    return (
        <div className="default-border p-2.5 mb-4">
            <div className="flex justify-between">
                <div className="flex gap-1 items-center cursor-pointer">
                    <PostFavoriteComponent postId={postId} isFavorite={isFavorite} />
                    <NavLink to={'posts/'+String(postId)}>
                        <h3 className="font-bold">{title}</h3>
                    </NavLink>
                </div>
                <p className="text-gray-500">{prettyTime}</p>
            </div>
            <div className="flex gap-1 px-0.5">
                <PostAuthorComponent authorId={authorId} />
                <div className="flex gap-0.5">
                    {tags?.map((tag) => {
                        return <TagComponent name={tag} link={tag} />;
                    })}
                </div>
            </div>
            <div className="px-2.5">{content}</div>
        </div>
    );
}
