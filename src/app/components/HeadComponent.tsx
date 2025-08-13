// import { useState } from "react";
import { NavLink } from "react-router";
import reactLogo from "../../assets/react.svg";
// import viteLogo from "/vite.svg";
import "../css/HeadComponent.css";

export default function HeadComponent({page: CurrentPage}:{page:string}) {
    // const [count, setCount] = useState(0);
    return (
        <>
            <header className="flex justify-between relative items-end w-full mb-8 after:bg-gray-500 after:w-full after:h-[1px] after:absolute after:-bottom-0.5">
                <NavLink id="You-here" className="flex items-end" to="/">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                    <div className="align-text-bottom text-nowrap h-fit ml-2">
                        {CurrentPage!=="Main Blog"?'to Main >':CurrentPage}
                    </div>
                </NavLink>
                <NavLink to="favorites">Favorites</NavLink>
            </header>
        </>
    );
}
