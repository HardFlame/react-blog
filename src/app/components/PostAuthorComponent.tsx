import { NavLink } from "react-router";
import { useUsersQuery } from "../store/Posts/Post.api";
import { useMemo } from "react";

export default function PostAuthorComponent(
    {authorId}: 
    {authorId:number}
) {
    const {
        // isLoading: isLoadingUser,
        // isError: isErrorUser,
        // error: errorUser,
        data: users,
    } = useUsersQuery("");
    const author = useMemo(
        () =>
            users?.find((user) => user.id === +authorId)?.username ||
            "Anonymous",
        [authorId,users]
    );
    // const author = users?.find((user) => user.id === +authorId)?.username ||
    //         "Anonymous"
    return (
        <>
            {"by "}
            <NavLink to={'../users/' + authorId} className="font-semibold">
                {author}
            </NavLink>
        </>
    );
}
