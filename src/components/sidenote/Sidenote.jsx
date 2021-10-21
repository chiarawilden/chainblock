import "./sidenote.css";

export default function Sidenote(props) {
    const {sidenote} = props;
    const text = sidenote.text;

    return (
        <div className="sidenote">
            {text}
        </div>
    )
}
