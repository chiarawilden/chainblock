import "./sidebar.css";
import Social from "../social/Social";
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <aside>
                <Link to="/getting-started"><h1>Getting Started</h1></Link>
                <ul>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                </ul>
                </aside>
            <aside>
                <h1>Section 2</h1>
                <ul>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                </ul>
            </aside>
            <aside>
                <h1>Section 3</h1>
                <ul>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                </ul>
                </aside>
            <aside>
                <h1>Section 4</h1>
                <ul>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                </ul>
            </aside>
            <Social/>
        </div>
    );
};
