import "./sidebar.css";
import Social from "../social/Social";
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <aside>
                <Link to="/intro-to-chainblock"><h1>Intro to ChainBlock</h1></Link>
                <ul>
                    <li><i className="fas fa-caret-right"></i>What is ChainBlock?</li>
                    <li><i className="fas fa-caret-right"></i>How does it work?</li>
                    <li><i className="fas fa-caret-right"></i>Why choose ChainBlock?</li>
                    <li><i className="fas fa-caret-right"></i>Basic functionality</li>
                </ul>
                </aside>
            <aside>
                <Link to="/getting-started"><h1>Getting Started</h1></Link>
                <ul>
                    <li><i className="fas fa-caret-right"></i>Core Concepts</li>
                    <li><i className="fas fa-caret-right"></i>API Specification</li>
                    <li><i className="fas fa-caret-right"></i>Guides</li>
                    <li><i className="fas fa-caret-right"></i>Cheatsheet</li>
                    <li><i className="fas fa-caret-right"></i>Contracts</li>
                </ul>
            </aside>
            <aside>
                <Link to="/reference"><h1>Reference</h1></Link>
                <ul>
                    <li><i className="fas fa-caret-right"></i>Resources</li>
                    <li><i className="fas fa-caret-right"></i>Security considerations</li>
                    <li><i className="fas fa-caret-right"></i>Style guide</li>
                    <li><i className="fas fa-caret-right"></i>List of known bugs</li>
                    <li><i className="fas fa-caret-right"></i>ChainBlock FAQ</li>
                </ul>
                </aside>
            <aside>
                <Link to="/community"><h1>Community</h1></Link>
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
