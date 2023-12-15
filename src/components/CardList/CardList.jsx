import "./CardList.css";
import Card from "../Card/Card";

const CardList = ({ cards }) => {
    return (
        <div className="card-list">
        {cards.map((card) => (
            <Card
            title={card.title}
            time={card.time}
            body={card.body}
            icon={card.icon}
            href={card.href}
            tags={card.tags}
            />
        ))}
        </div>
    );
}