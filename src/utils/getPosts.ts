import type { IPost } from "../types/Post";
import type { IUser } from "../types/User";
// import { getUsers } from "./getUsers";
import { capitalizeFirstLetter } from "./TextUtils";

const userMap = new Map<number, IUser>();
//Dummy---------------------------------------------
function dummyTags() {
    const tags = [];
    const mayTags = [
        "hi!",
        "author",
        "can",
        "you",
        "play",
        "with",
        "some",
        "code",
    ];
    while (tags.length === 0) {
        for (let i = 0; i < mayTags.length; i++) {
            if (Math.floor(Math.random() * 5) > 3) tags.push(mayTags[i]);
        }
    }
    return tags;
}
function dummyTime() {
    return new Date(
        new Date().valueOf() - Math.floor(Math.random() * 60 * 60 * 24 * 31)
    ).valueOf();
}
//Dummy---------------------------------------------
export function updatePostsUsername(posts: IPost[]) {
    posts.forEach((post) => {
        const user = userMap.get(post.userId);
        post.userName =
            typeof user?.name === "string" && user.name.length > 0
                ? user.name
                : "Anonymous";
    });
}
export function dummyUpdate(posts:IPost[]) {
    posts.forEach((post) => {
        post.title = capitalizeFirstLetter(post.title)
        post.createdTime = post.createdTime ? post.createdTime : dummyTime();
        post.tags = post.tags ? post.tags : dummyTags();
    });
    return posts
}

//const CurrentPage = "Main Blog";
