import './IconButton.css'

const IconButton = ({ icon, href, color="white", onClick}) => (
    <div className="icon-button" onClick={onClick} style={{ cursor: 'pointer' }}>
        <a href={href} target="_blank">
            <i className={icon}></i>
        </a>
    </div>
)

export default IconButton