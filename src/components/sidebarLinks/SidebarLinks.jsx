import "./sidebarlinks.css";
import {Link} from "react-router-dom";

export default function SidebarLinks(props) {
    const header = props.link.header
    const subheader = props.link.subheader;

    return (
        <>
            {header && (
                <Link to={header.url}><h1>{header}</h1></Link>
            )}
            {subheader && (
                <Link to={subheader.url}><span><i className="fas fa-caret-right"></i>{subheader}</span></Link>
            )}
        </>
    )
}
