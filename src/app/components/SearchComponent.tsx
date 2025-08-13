import { useDispatch } from "react-redux";
import { useDebounce } from "../hooks/debounce";
import { useEffect, useState } from "react";
import { changeText } from "../store/searchQuery/searchPostsQuery.slice";

export default function SearchComponent() {
    const dispatch = useDispatch()
    const [search,setSearch] = useState('')
    const debounced = useDebounce(search)
    useEffect(()=>{
        dispatch(changeText(debounced));
        // console.log(debounced)
    },[debounced,dispatch])
    return (
        <form id="search-posts" className="flex relative default-border h-8 mb-5">
            <button type="submit" className="flex items-center py-1 px-1 h-full default-border border-none self-center cursor-pointer">
                <svg
                    className=" text-gray-500 dark:text-gray-400 w-full h-full"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </button>
            <input
                className="w-full h-full px-0.5 default-border border-none outline-none"
                type="search"
                name="search-posts"
                placeholder="Search posts"
                value={search}
                onChange={(e=>setSearch(e.target.value))}
            />
        </form>
    );
}
