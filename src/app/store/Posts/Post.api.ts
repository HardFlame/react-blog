import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { IPost } from "../../../types/Post";
import { dummyUpdate } from "../../../utils/getPosts";
import type { IUser } from "../../../types/User";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
export const UserMap: Map<number, IUser> = new Map();
export const postApi = createApi({
    reducerPath: "placeholder/api",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        posts: build.query<IPost[], string>({
            query: (id?: string | number, userId?: string) => {
                const q: {
                    url: string;
                    params?: {
                        [k: string]: string | number;
                    };
                } = { url: "posts" };
                if (id) {
                    q.params = {
                        id: id,
                    };
                }
                if (userId) {
                    q.params = {
                        userId: userId,
                    };
                }
                return q;
            },
            transformResponse: (posts: IPost[]) => {
                // const {
                //     // isLoading: isLoadingUser,
                //     // isError: isErrorUser,
                //     // error: errorUser,
                //     data: users,
                // } = useUsersQuery('');
                // const userMap = new Map<number,IUser>()
                // users?.forEach((user)=>{
                // userMap.set(user.id,user)
                // })
                // updatePostsUsername(posts);
                dummyUpdate(posts);
                return posts;
            },
        }),
        users: build.query<IUser[], string>({
            query: (userId?: string | number[]) => {
                const q: {
                    url: string;
                    params?: {
                        [k: string]: string | (string | number)[];
                    };
                } = { url: "users" };
                if (userId) {
                    q.params = {
                        id: userId,
                    };
                }
                return q;
            },
            transformResponse: (users: IUser[]) => {
                users.forEach((user) => UserMap.set(user.id, user));
                return users;
            },
        }),
    }),
});

export const { usePostsQuery, useUsersQuery } = postApi;

// const processUsersData = (usersData: IUser[]) => {
//     const {userMap} = useTypedSelector((state)=>state)
//     if (!usersData) return new Map();
//     const userMap = new Map<number, IUser>()
//     usersData.forEach((user)=>{
//         userMap.set(user.id,user)
//     })
//     return userMap
// }
