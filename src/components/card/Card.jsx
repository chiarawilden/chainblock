import "./card.css";

export default function Card(props) {
    const {card} = props;
    const text = card.text;
    
    return (
        <div className="card">
           {text}
        </div>
    )
}
