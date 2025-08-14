import { NavLink } from "react-router";
import type { IUser } from "../../types/User";

// import { useTypedSelector } from "../hooks/useTypesSelector";

export default function FullSizeUserComponent({
    userData,
}: {
    userData: IUser;
}) {
    const userId = userData.id;
    const userName = userData.name;

    return (
        <>
            <div className="default-border p-2.5 mb-4">
                <NavLink to={"../users/" + userId} className="font-semibold">
                    {userName}
                </NavLink>
            </div>
        </>
    );
}
