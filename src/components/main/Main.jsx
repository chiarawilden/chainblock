import "./main.css";
import Home from "../../pages/Home";
import PageNav from "../pageNav/PageNav";

export default function Main() {
    return (
        <div className="main">
            <div className="main-left">
                <Home/>
            </div>
            <div className="main-right">
                <PageNav/>
            </div>
        </div>
    )
}
