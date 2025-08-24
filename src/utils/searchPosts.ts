import type { IPost } from "../types/Post";

interface IFilteredResponse {
    posts: IPost[];
    length: number;
    Ids: number[];
}

function getProperResponse(posts: IPost[]): IFilteredResponse {
    return {
        posts: posts,
        length: posts.length,
        Ids: posts.map((post) => post.id),
    };
}

function filterPostsByAttribute(
    posts: IPost[],
    attr: keyof IPost,
    value: string | number
): IFilteredResponse {
    const filtered = posts.filter((post) => {
        if (Object.hasOwn(post, attr)) {
            if (typeof post[attr] === "string" && typeof value === "string") {
                value = String(value);
                return String(post[attr]).match(value);
            } else if (typeof post[attr] === "number") {
                value = typeof value === "string" ? parseInt(value) : value;
                return post[attr] === value;
            } else {
                return false;
            }
        }
    });
    return getProperResponse(filtered);
}

function filterPostsById(posts: IPost[], id: number): IFilteredResponse {
    return filterPostsByAttribute(posts, "id", id);
}

function filterPostsByTitle(posts: IPost[], title: string): IFilteredResponse {
    return filterPostsByAttribute(posts, "title", title);
}

function filterPostsByUserId(
    posts: IPost[],
    UserId: number
): IFilteredResponse {
    return filterPostsByAttribute(posts, "userId", UserId);
}

function filterPostsByBody(posts: IPost[], body: string): IFilteredResponse {
    return filterPostsByAttribute(posts, "body", body);
}

function filterPostsByAnything(
    posts: IPost[],
    value: string
): IFilteredResponse {
    const { Ids: titleIds } = filterPostsByTitle(posts, value);
    // const { Ids: userNameIds } = filterPostsByUserName(posts, value);
    const { Ids: BodyIds } = filterPostsByBody(posts, value);
    const allIdsSet = new Set(titleIds.concat(BodyIds));
    const filtered = posts.filter((post) => allIdsSet.has(post.id));
    return getProperResponse(filtered);
}

function filterPostsByAnyArray<T>(
    posts: IPost[],
    attr: keyof IPost,
    arr: T[]
): IFilteredResponse {

    const filtered = posts.filter((post) => {
        const attrSet: Set<T> = new Set(arr);
        if (Object.hasOwn(post, attr)) {
            if (Array.isArray(post[attr])) {
                return post[attr].findIndex((el) => attrSet.has(el)) !== -1
            } else {
                return attrSet.has(post[attr] as T)
            }
        }
    });
    return getProperResponse(filtered);
}

function filterPostsByIds(posts: IPost[], Ids: number[]) {
    return filterPostsByAnyArray(posts, "id", Ids);
}

function filterPostsByUserIds(posts: IPost[], Ids: number[]) {
    return filterPostsByAnyArray(posts, "userId", Ids);
}

function filterPostsByTags(posts: IPost[], tags: string[]) {
    return filterPostsByAnyArray(posts, "tags", tags);
}

export {
    filterPostsByAttribute,
    filterPostsById,
    filterPostsByTitle,
    filterPostsByUserId,
    filterPostsByBody,
    filterPostsByAnything,
    filterPostsByAnyArray,
    filterPostsByIds,
    filterPostsByUserIds,
    filterPostsByTags,
};
