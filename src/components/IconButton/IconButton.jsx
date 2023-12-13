import './IconButton.css'

const IconButton = ({ icon, href, color="white" }) => (
    <div className="icon-button">
        <a href={href} target="_blank">
            <i className={icon}></i>
        </a>
    </div>
)

export default IconButton