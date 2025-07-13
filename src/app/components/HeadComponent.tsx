// import { useState } from "react";
import { NavLink } from "react-router";
import reactLogo from "../../assets/react.svg";
// import viteLogo from "/vite.svg";
import "../css/HeadComponent.css";

export default function HeadComponent(props:{page:string}) {
    // const [count, setCount] = useState(0);
    const CurrentPage = props.page;
    return (
        <>
            <header>
                <NavLink id="You-here" to="/">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                    <div>
                        {CurrentPage}
                    </div>
                </NavLink>
                <NavLink to="favorites">Favorites</NavLink>
            </header>
        </>
    );
}
