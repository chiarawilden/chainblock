import "./sidebarlinks.css";
import {Link} from "react-router-dom";

export default function SidebarLinks(props) {
    const {link} = props;
    const header = link.header;
    const subheader = link.subheader;
    const url = link.url;

    return (
        <>
            {header && (
                <h1><Link to={url}>{header}</Link></h1>
            )}
            {subheader && (
                <span><Link to={url}><i className="fas fa-caret-right"></i>{subheader}</Link></span>
            )}
        </>
    )
}
