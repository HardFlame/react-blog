import type { IUser } from "../types/User";

interface IFilteredResponse {
    users: IUser[];
    length: number;
    Ids: number[];
}

function getProperResponse(users: IUser[]): IFilteredResponse {
    return {
        users: users,
        length: users.length,
        Ids: users.map((user) => {
            return user.id;
        }),
    };
}

function filterUsersByAttribute(
    users: IUser[],
    attr: keyof IUser,
    value: string | number
): IFilteredResponse {
    const filtered = users.filter((post) => {
        if (Object.hasOwn(post, attr)) {
            if (typeof post[attr] === "string" && typeof value === "string") {
                value = String(value).toLowerCase();
                return !!String(post[attr]).toLowerCase().match(value)?.[0];
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

function filterUsersById(users: IUser[], id: number): IFilteredResponse {
    return filterUsersByAttribute(users, "id", id);
}

function filterUsersByUserName(
    users: IUser[],
    userName: string
): IFilteredResponse {
    return filterUsersByAttribute(users, "username", userName);
}

function filterUsersByAnyArray<T>(
    users: IUser[],
    attr: keyof IUser,
    arr: T[]
): IFilteredResponse {
    const attrSet: Set<T> = new Set(arr);
    const filtered = users.filter((post) => {
        if (Object.hasOwn(post, attr)) {
            if (Array.isArray(post[attr])) {
                return post[attr].findIndex((el) => attrSet.has(el)) !== -1;
            } else {
                return attrSet.has(post[attr] as T);
            }
        }
    });
    return getProperResponse(filtered);
}

function filterUsersByIds(users: IUser[], Ids: number[]) {
    return filterUsersByAnyArray(users, "id", Ids);
}

export {
    filterUsersByAttribute,
    filterUsersById,
    filterUsersByUserName,
    filterUsersByAnyArray,
    filterUsersByIds,
};
