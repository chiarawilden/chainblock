import "./topbar.css";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="info">
                <div className="logo">ChainBlock</div>
                <div className="title">Docs</div>
            </div>
            <div className="search">
                <input type="text"/>
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}