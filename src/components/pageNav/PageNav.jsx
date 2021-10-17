import "./pagenav.css";

export default function PageNav() {
    return (
        <div className="pagenav">
            <aside>
                <h1 className="heading">Welcome to ChainBlock</h1>
                <ul>
                    <li><i class="fas fa-angle-double-right"></i>Subheader 1</li>
                </ul>  
            </aside>
            <aside>
                <h1>Header 2</h1>
                <ul>
                    <li><i class="fas fa-angle-double-right"></i>Subheader 2</li>
                </ul>
            </aside>
            <aside>
                <h1>Header 3</h1>
                <ul>
                    <li><i class="fas fa-angle-double-right"></i>Subheader 3</li>
                    <li><i class="fas fa-angle-double-right"></i>Subheader 4</li>
                </ul>
            </aside>      
        </div>
    )
}
