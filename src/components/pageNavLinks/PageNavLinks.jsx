import "./pagenavlinks.css";
import {Link} from "react-router-dom";

export default function PageNavLinks(props) {
    const {pageLink} = props;
    const header = pageLink.header;
    const subheader = pageLink.subheader;
    const url = pageLink.url;

    return (
        <>
            {header && (
                <h1><Link to={url}>{header}</Link></h1>
            )}
            {subheader && (
                <span><Link to={url}><i className="fas fa-angle-double-right"></i>{subheader}</Link></span>
            )}
        </>
    )
}