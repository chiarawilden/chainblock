import "./social.css";
import {Link} from "react-router-dom";

export default function Social() {
    return (
        <Link to={{pathname: "https://github.com/chiarawilden/chainblock-docs-app"}} target="_blank">
            <div className="social" >
                <p style={{margin: "11px 0"}}>Check out on GitHub!</p>
                <i className="fab fa-github-alt"></i>
            </div>
        </Link>
    )
}
