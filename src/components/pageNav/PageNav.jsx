import "./pagenav.css";
import PageNavLinks from "../pageNavLinks/PageNavLinks";

export default function PageNav(props) {
    // uses plural "pageLinks" designation for component passing props
    const {pageLinks} = props;
    const id = pageLinks.id;
  
    return (
        <div className="pagenav">
            {pageLinks.map((pageLinks, id) => (
                <PageNavLinks pageLink={pageLinks} key={id}/>
            ))}
        </div>
    )
}
