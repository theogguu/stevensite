import "./TagList.css";
import Tag from "./Tag";

const TagList = ({ tags }) => {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <Tag key={index} name={tag} />
      ))}
    </div>
  );
}

export default TagList;