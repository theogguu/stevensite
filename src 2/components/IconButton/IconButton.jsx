import './IconButton.css'

const IconButton = ({ icon, href, alt, color="white", onClick }) => {
    // Determine the element type based on the presence of `href`
    const ElementType = href ? 'a' : 'button';

    return (
        <div className="icon-button">
            <ElementType
                aria-label={alt}
                href={href}
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
                onClick={onClick}
                className="icon-button__link"
            >
                <i className={icon}></i>
            </ElementType>
        </div>
    )
}

export default IconButton
