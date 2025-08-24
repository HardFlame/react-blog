import type { IUser } from "../types/User";

function getUsersMap(users:IUser[]) {
    const usersMap = new Map()
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        usersMap.set(user.id,user)
    }
    return usersMap
}

export {getUsersMap}