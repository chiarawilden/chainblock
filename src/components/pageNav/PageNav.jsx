import "./pagenav.css";

export default function PageNav() {
    return (
        <div className="pagenav">
            <aside>
                <h1 className="heading">Welcome to ChainBlock</h1>
                <ul>
                    <a href="#home-subheader-01"><li><i className="fas fa-angle-double-right"></i>Subheader 1</li></a>
                </ul>  
            </aside>
            <aside>
                <h1>Header 2</h1>
                <ul>
                    <a href="#home-subheader-02"><li><i className="fas fa-angle-double-right"></i>Subheader 2</li></a>
                </ul>
            </aside>
            <aside>
                <h1>Header 3</h1>
                <ul>Name
                    <a href="#home-subheader-03"><li><i className="fas fa-angle-double-right"></i>Subheader 3</li></a>
                    <a href="#home-subheader-04"><li><i className="fas fa-angle-double-right"></i>Subheader 4</li></a>
                </ul>
            </aside>      
        </div>
    )
}
