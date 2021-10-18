import "./sidebarlinks.css";
import {Link} from "react-router-dom";

export default function SidebarLinks(props) {
    const header = props.link.header
    const subheader = props.link.subheader;

    return (
        <>
            {header && (
                <h1><Link to={header.url}>{header}</Link></h1>
            )}
            {subheader && (
                <span><Link to={subheader.url}><i className="fas fa-caret-right"></i>{subheader}</Link></span>
            )}
        </>
    )
}
