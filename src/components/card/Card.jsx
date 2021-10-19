import "./card.css";

export default function Card(props) {
    const text = props.card.text;
    
    return (
        <div className="card">
           {text}
        </div>
    )
}
