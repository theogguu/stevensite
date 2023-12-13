import "./Card.css";
import IconButton from "../IconButton/IconButton";

const Card = ({ title, body, icon, href }) => {
  return (
    <div className="project-card">
      <div className="project-card-heading">
        <a href={href}><h2>{title}</h2></a>
        <div className="project-card-icon">
          {icon}
        </div>
      </div>
      <div className="project-card-subheading">
        <p>July 2023 - Sept 2023</p>
      </div>
      <div className="project-card-content">
        <p>
          {body}
        </p>
      </div>
      <div className="project-card-footer">
        <p>bees</p>
      </div>
    </div>
  );
};

export default Card;
