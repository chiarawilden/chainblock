import "./sidebar.css";
import Social from "../social/Social";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <aside>
            <h2>Getting Started</h2>
                <ul>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                </ul>
            </aside>
            <aside>
            <h2>Section 2</h2>
                <ul>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                </ul>
            </aside>
            <aside>
            <h2>Section 3</h2>
                <ul>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                </ul>
            </aside>
            <aside>
            <h2>Section 4</h2>
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
