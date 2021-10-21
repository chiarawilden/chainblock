import "./pagenav.css";
import PageNavLinks from "../pageNavLinks/PageNavLinks";

export default function PageNav() {
    const pageNavLinks = [
        {id: 0, header: "Welcome to ChainBlock", url: "/"},
        {id: 2, subheader: "Subheader 1", url:"/"},

        {id: 3, header: "Header 2", url: "/intro-to-chainblock"},
        {id: 4, subheader: "Subheader 2", url:"/"},

        {id: 5, header: "Header 3", url: "/intro-to-chainblock"},
        {id: 6, subheader: "Subheader 3", url:"/"},
        {id: 7, subheader: "Subheader 4", url:"/"}
    ]

    return (
        <div className="pagenav">
            {pageNavLinks.map((element, id) => (
                <PageNavLinks pageLink={element} key={id}/>
            ))}
        </div>
    )
}
