// import { useState } from "react";
import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import "./css/App.css";

function App() {
    // const [count, setCount] = useState(0);
    const CurrentPage = "Main Blog";
    return (
        <>
            <header>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <div id="CurrendPage" className="">
                    {CurrentPage}
                </div>
            </header>
        </>
    );
}

export default App;
