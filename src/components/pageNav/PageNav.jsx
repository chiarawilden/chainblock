import "./pagenav.css";
import PageNavLinks from "../pageNavLinks/PageNavLinks";

export default function PageNav(props) {
    // uses plural "pageLinks" designation for current component passing props
    const {pageLinks} = props;
    
    return (
        <div className="pagenav">
            {pageLinks.map((pageLinks) => (
                <PageNavLinks pageLink={pageLinks} key={pageLinks.id}/>
            ))}
        </div>
    )
}
