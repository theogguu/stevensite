import "./Headshot.css";
const Headshot = ({src, alt, size}) => {
    return (
        <div className="headshot">
        <img src={src} alt={alt} style={{width: size, height: size}}/>
        </div>
    );

};

export default Headshot;