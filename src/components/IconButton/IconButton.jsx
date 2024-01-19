import './IconButton.css'

const IconButton = ({ icon, href, alt, color="white", onClick}) => (
    <div className="icon-button" onClick={onClick} style={{ cursor: 'pointer' }}>
        <a href={href} target="_blank" alt={alt}>
            <i className={icon}></i>
        </a>
    </div>
)

export default IconButton