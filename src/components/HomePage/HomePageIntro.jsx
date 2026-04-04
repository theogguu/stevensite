import Headshot from "../Headshot/Headshot"
const HomePageIntro = () => {
    return (
        <section className="intro">
            <p id="one">Hi, I'm</p>
            <div className="title">Steven Gu</div>
            <Headshot src="/linkedin.jpg" alt="Steven Gu" size="12rem" />
            <div className="body">
            <hr></hr>
            <p>
                I currently work as a Software Test Engineer at <a href="https://gemmacon.com/en/">GEMMACON NA</a>.
                My interests lie in software development and computational and systems biology. 
                I'm also an avid <i><a href="/cooking">home cook</a></i>, violinist, gamer, and TTRPG enthusiast.
            </p>
            </div>
      </section>
    )
}

export default HomePageIntro;