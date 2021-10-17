import "./sidebar.css";
import Social from "../social/Social";
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <aside>
                <Link to="/getting-started"><h1>Getting Started</h1></Link>
                <ul>
                    <li><i className="fas fa-caret-right"></i>What is ChainBlock?</li>
                    <li><i className="fas fa-caret-right"></i>How does it work?</li>
                    <li><i className="fas fa-caret-right"></i>Why choose ChainBlock?</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                    <li><i className="fas fa-caret-right"></i>This is a line</li>
                </ul>
                </aside>
            <aside>
                <h1>Introduction to ChainBlock</h1>
                <ul>
                    <li><i className="fas fa-caret-right"></i>Core Concepts</li>
                    <li><i className="fas fa-caret-right"></i>API Specification</li>
                    <li><i className="fas fa-caret-right"></i>Guides</li>
                    <li><i className="fas fa-caret-right"></i>Cheatsheet</li>
                    <li><i className="fas fa-caret-right"></i>Contracts</li>
                </ul>
            </aside>
            <aside>
                <h1>Reference</h1>
                <ul>
                    <li><i className="fas fa-caret-right"></i>Resources</li>
                    <li><i className="fas fa-caret-right"></i>Security considerations</li>
                    <li><i className="fas fa-caret-right"></i>Style guide</li>
                    <li><i className="fas fa-caret-right"></i>List of known bugs</li>
                    <li><i className="fas fa-caret-right"></i>ChainBlock FAQ</li>
                </ul>
                </aside>
            <aside>
                <h1>Community</h1>
                <ul>
                    <li><i className="fas fa-caret-right"></i>How to contribute</li>
                    <li><i className="fas fa-caret-right"></i>Online disscussion forums</li>
                    <li><i className="fas fa-caret-right"></i>ChainBlock workshops</li>
                    <li><i className="fas fa-caret-right"></i>Contribution tutorial</li>
                    <li><i className="fas fa-caret-right"></i>Social media</li>
                </ul>
            </aside>
            <Social/>
        </div>
    );
};
