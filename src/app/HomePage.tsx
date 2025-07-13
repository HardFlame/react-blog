import HeadComponent from "./components/HeadComponent";
import MiniPostComponent from "./components/MinPostComponent";
import SearchComponent from "./components/SearchComponent";
import { type IPost } from "../types/Post";
//import "./css/HomePage.css";

export default function HomePage() {
    const posts: IPost[] = [
        {
            title: "PostName",
            author: "Nick",
            tags: ["blog", "sun", "summer"],
            content: "Hi everyone!",
        },
    ];
    // const [count, setCount] = useState(0);
    //const CurrentPage = "Main Blog";
    return (
        <>
            <HeadComponent page="Main Blog" />
            <SearchComponent />
            {posts.map((postData) => {
                return <MiniPostComponent postData={postData} />;
            })}
        </>
    );
}
