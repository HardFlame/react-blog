import type { IUser } from "../types/User";

//Dummy---------------------------------------------

//Dummy---------------------------------------------

async function getUsers(userIds?: (string | number)[], addQuery?: string) {
    if (addQuery) {
        //Escaping a query to avoid injection
        addQuery = JSON.stringify(addQuery).slice(1, -1);
    }
    try {
        const API = new URL("https://jsonplaceholder.typicode.com/users");

        if (userIds && userIds?.length > 0) {
            for (let i = 0; i < userIds.length; i++) {
                API.searchParams.append("id", (+userIds[i]).toString()); //Conversion to a number is important to avoid injections
            }
        }

        if (addQuery) {
            const addParams = new URLSearchParams(addQuery);
            addParams.forEach((val, key) => {
                API.searchParams.append(key, val);
            });
        }
        const usersResponse = await fetch(API);
        const usersData: IUser[] = await usersResponse.json();
        return usersData
    } catch (error) {
        console.error("Error fetching users:", error);
        return []
    }
}
async function getAllUsers() {
    return getUsers()
}

export {getAllUsers,getUsers}
// const [count, setCount] = useState(0);
//const CurrentPage = "Main Blog";
