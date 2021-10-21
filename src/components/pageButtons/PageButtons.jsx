import "./pagebuttons.css";
import {Link} from "react-router-dom";

export default function PageButtons(props) {
    const {pageButtons} = props;
    const previousPage = pageButtons.previousPage;
    const nextPage = pageButtons.nextPage;

    return (
        <div className="pagebuttons">
            <Link to={previousPage}><button className="previous">Back</button></Link>
            <Link to={nextPage}><button className="next">Next</button></Link>
        </div>
    )
}
