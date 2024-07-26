import "./Card.css";
import IconButton from "../IconButton/IconButton";
import TagList from "../Tag/TagList";

const Card = ({title, time, body, icon, href, tags, onClick, dataCyName, hoverable}) => {
  const handleCardClick = (e) => {
    // Check if the click target is the anchor, if so, let the browser handle it
    if (e.target.tagName.toLowerCase() === "a" && href) {
      return;
    }

    // Handle the click for the entire card
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={hoverable ? `project-card hoverable` : `project-card`} onClick={handleCardClick} data-cy={dataCyName}>
      <div className="project-card-heading">
        <h3>
          <a href={href} target="_blank">
            <span>{title} </span>
            {href && <i className="bi bi-box-arrow-up-right"></i>}
            {/* render box-arrow icon only if href exists */}
          </a>
        </h3>
        {icon && <div className="project-card-icon">{icon}</div>}
      </div>
      <div className="project-card-subheading">
        <p>{time}</p>
      </div>
      <div className="project-card-content">
        <p>{body}</p>
      </div>
      {/* only render this footer if it has tags */}
      {tags && tags.length > 0 && (
        <div className="project-card-footer">
          <TagList tags={tags} />
        </div>
      )}
    </div>
  );
};

export default Card;
