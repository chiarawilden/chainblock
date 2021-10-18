import "./pagenavlinks.css";
import {Link} from "react-router-dom";

export default function PageNavLinks(props) {
    const header = props.pageLink.header;
    const subheader = props.pageLink.subheader;

    return (
        <>
            {header && (
                <Link to={header.url}><h1>{header}</h1></Link>
            )}
            {subheader && (
                <Link to={subheader.url}><span><i class="fas fa-angle-double-right"></i>{subheader}</span></Link>
            )}
        </>
    )
}