import "./sidebar.css";
import Social from "../social/Social";
import SidebarSection from "../sidebarSection/SidebarSection";

export default function Sidebar() {
    const sidebarSection = [
        {id: 0, header: "Intro to ChainBlock", url: "/intro-to-chainblock"},
        {id: 1, subheader: "What is ChainBlock?", url:"/"},
        {id: 2, subheader: "How does it work?", url:"/"},
        {id: 3, subheader: "Why choose ChainBlock?", url:"/"},
        {id: 4, subheader: "Basic functionality", url:"/"},
        
        {id: 5, header: "Getting Started", url: "/getting-started"},
        {id: 6, subheader: "Core Concepts", url:"/"},
        {id: 7, subheader: "API Specification", url:"/"},
        {id: 8, subheader: "Guides", url:"/"},
        {id: 9, subheader: "Cheatsheet", url:"/"},
        {id: 10, subheader: "Contracts", url:"/"},

        {id: 11, header: "Reference", url: "/reference"},
        {id: 12, subheader: "Resources", url:"/"},
        {id: 13, subheader: "Security considerations", url:"/"},
        {id: 14, subheader: "Style guide", url:"/"},
        {id: 15, subheader: "List of known bugs", url:"/"},
        {id: 16, subheader: "ChainBlock FAQ", url:"/"},

        {id: 17, header: "Community", url: "/community"},
        {id: 18, subheader: "How to Contribute", url:"/"},
        {id: 19, subheader: "Online discussion forums", url:"/"},
        {id: 20, subheader: "Chainblock workshops", url:"/"},
        {id: 21, subheader: "Contribution tutorial", url:"/"},
        {id: 22, subheader: "Social media", url:"/"},
    ]

    return (
        <div className="sidebar">       
            {sidebarSection.map((element, id) => (
                <SidebarSection link={element} key={element.id}/>
            ))}
            <Social/>
        </div>
    );
};
