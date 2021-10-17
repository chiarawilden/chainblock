import "./sidebar.css";
import Social from "../social/Social";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <aside>
                <h1>Getting Started</h1>
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
