import Headshot from "../Headshot/Headshot"
const HomePageIntro = () => {
    return (
        <section className="intro">
            <p id="one">Hi, I'm</p>
            <div className="title">Steven Gu</div>
            <Headshot src="/linkedin.jpg" alt="Steven Gu" size="12rem" />
            <div className="body" id="body-intro">
            <hr></hr>
            <p>
                I work as a Systems Integration Engineer at <a href="mbrdna.com"> Mercedes-Benz RDNA</a> and a Software Test Engineer Consultant for <a href="https://gemmacon.us/en/">GEMMACON</a>. My interests lie in software development and computational and systems biology. 
                
                <br></br>I'm also an avid home cook, violinist, gamer, and TTRPG enthusiast.
            </p>
            </div>
      </section>
    )
}

export default HomePageIntro;