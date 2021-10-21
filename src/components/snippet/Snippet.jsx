import "./snippet.css";

export default function Snippet(props) {
    const {snippet} = props;
    const code = snippet.code;

    return (
        <div className="snippet">
            {code}
        </div>
    )
}
