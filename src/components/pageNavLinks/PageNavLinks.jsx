import "./pagenavlinks.css";
import {Link} from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link';

export default function PageNavLinks(props) {
    // uses singular "pageLink" designation for component outputting props
    const {pageLink} = props;
    const headerLink = pageLink.headerLink;
    const subheaderLink = pageLink.subheaderLink;
    const url = pageLink.url;
  
    return (
        <>
            {headerLink && (
                <h1><NavHashLink to={url}>{headerLink}</NavHashLink></h1>
            )}
            {subheaderLink && (
                <span><NavHashLink to={url}><i className="fas fa-angle-double-right"></i>{subheaderLink}</NavHashLink></span>
            )}
        </>
    )
}