import "./topbar.css";
import {Link} from "react-router-dom";

export default function Topbar() {
    const input = event => {
        console.log("onInput", event.target.value);
    }

    return (
        <div className="topbar">
            <div className="info">
                <Link to="/"><div className="logo">ChainBlock</div></Link>
                <div className="title">Docs</div>
            </div>
            <div className="search">
                <form onInput={input}>
                    <input type="text" placeholder="Search"/>
                    <button><i className="fas fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}
