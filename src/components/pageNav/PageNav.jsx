import "./pagenav.css";
import PageNavLinks from "../pageNavLinks/PageNavLinks";

export default function PageNav() {
    const pageNavLinks = [
        {id: 0, header: "Welcome to ChainBlock", url: "/"},
        {id: 1, subheader: "Subheader 1", url:"/"},
        {id: 2, subheader: "Subheader 2", url:"/"},
        {id: 3, subheader: "Subheader 3", url:"/"},
        {id: 4, subheader: "Subheader 4", url:"/"}
    ]

    return (
        <div className="pagenav">
            {pageNavLinks.map((element, id) => (
                <PageNavLinks pageLink={element} key={id}/>
            ))}
        </div>
    )
}
