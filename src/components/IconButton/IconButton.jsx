import './IconButton.css'

const IconButton = ({ icon, href, alt, color="white", onClick}) => (
    <div className="icon-button" onClick={onClick} aria-label={alt}>
        <button href={href} target="_blank">
            <i className={icon}></i>
        </button>
    </div>
)

export default IconButton