import "./pagenavlinks.css";
import {Link} from "react-router-dom";

export default function PageNavLinks(props) {
    const header = props.pageLink.header;
    const subheader = props.pageLink.subheader;

    return (
        <>
            {header && (
                <h1><Link to={header.url}>{header}</Link></h1>
            )}
            {subheader && (
                <span><Link to={subheader.url}><i class="fas fa-angle-double-right"></i>{subheader}</Link></span>
            )}
        </>
    )
}