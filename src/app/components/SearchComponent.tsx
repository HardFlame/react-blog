import "../css/SearchComponent.css";

export default function SearchComponent() {
    function search() {}
    return (
        <form id="search-posts" action={search}>
            <button type="submit"></button>
            <input
                type="search"
                name="search-posts"
                placeholder="Search posts"
            />
        </form>
    );
}
