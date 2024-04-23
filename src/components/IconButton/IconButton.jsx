import './IconButton.css'

const IconButton = ({ icon, href, alt, color="white", onClick}) => (
    <div className="icon-button" onClick={onClick}>
        <button href={href} target="_blank" alt={alt}>
            <i className={icon}></i>
        </button>
    </div>
)

export default IconButton