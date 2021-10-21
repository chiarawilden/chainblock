import "./sidebar.css";
import Social from "../social/Social";
import SidebarLinks from "../sidebarLinks/SidebarLinks";

export default function Sidebar() {
    const sidebarLinks = [
        {id: 0, header: "Intro to ChainBlock", url: "/intro-to-chainblock"},
        {id: 1, subheader: "What is ChainBlock?", url:"/what-is-chainblock"},
        {id: 2, subheader: "How does it work?", url:"/how-does-it-work"},
        {id: 3, subheader: "Why choose ChainBlock?", url:"/why-choose-chainblock"},
        {id: 4, subheader: "Basic functionality", url:"/basic-functionality"},
        
        {id: 5, header: "Getting Started", url: "/getting-started"},
        {id: 6, subheader: "Core Concepts", url:"/core-concepts"},
        {id: 7, subheader: "API Specification", url:"/api-specification"},
        {id: 8, subheader: "Guides", url:"/guides"},
        {id: 9, subheader: "Cheatsheet", url:"/cheatsheet"},
        {id: 10, subheader: "Contracts", url:"/contracts"},

        {id: 11, header: "Reference", url: "/reference"},
        {id: 12, subheader: "Resources", url:"/resources"},
        {id: 13, subheader: "Security considerations", url:"/security-considerations"},
        {id: 14, subheader: "Style guide", url:"/style-guide"},
        {id: 15, subheader: "Known Bugs", url:"/known-bugs"},
        {id: 16, subheader: "ChainBlock FAQ", url:"/chainblock-faq"},

        {id: 17, header: "Community", url: "/community"},
        {id: 18, subheader: "How to Contribute", url:"/how-to-contribute"},
        {id: 19, subheader: "Online discussion forums", url:"/online-discussion-forums"},
        {id: 20, subheader: "Chainblock workshops", url:"/chainblock-workshops"},
        {id: 21, subheader: "Contribution tutorial", url:"/contribution-tutorial"},
        {id: 22, subheader: "Social media", url:"/social-media"},
    ]

    return (
        <div className="sidebar">       
            {sidebarLinks.map((element, id) => (
                <SidebarLinks link={element} key={id}/>
            ))}
            <Social/>
        </div>
    );
};
