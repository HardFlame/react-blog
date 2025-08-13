import { NavLink } from "react-router";

export default function TagComponent(props: { name: string; link: string }) {
    const name = props.name;
    const link = props.link;
    return (
        <NavLink
            to={link}
            className="block py-0 px-1.5 pr-1.5 bg-gray-400 rounded-full text-center items-baseline"
        >
            {name + " "}
            <span className="font-semibold">{">"}</span>
        </NavLink>
    );
}
