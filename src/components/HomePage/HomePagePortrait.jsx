import CardList from "../CardList/CardList";
import Headshot from "../Headshot/Headshot";
import IconButton from "../IconButton/IconButton";

const HomePagePortrait = ({cardContents, openModalAndSetContent}) => {
  return (

<div className="d-none d-lg-block container">
<div className="row">
  <div className="col-6">
    <div className="sticky-column">
        <section className="intro">
            <p id="one">Hi, I'm</p>
            <div className="title">Steven Gu</div>
            <Headshot src="/linkedin.jpg" alt="Steven Gu" size="12rem" />
            <div className="body">
                <hr></hr>
                <p>
                I'm a fourth-year student studying Computer Science and Biology
                at Northwestern University. I'm also an avid home cook,
                violinist, gamer, and TTRPG enthusiast.
                </p>
            </div>
        </section>
    <section className="My Links">
      <div className="profile-footer">
        <div className="icons">
          <IconButton
            icon="bi bi-github"
            href="https://github.com/theogguu"
            aria-label="Steven's GitHub page"
            alt="GitHub"
            
          />
          <IconButton
            icon="bi bi-linkedin"
            href="https://www.linkedin.com/in/steven-gu/"
            alt="LinkedIn"
            aria-label="Steven's LinkedIn page"
          />
          <IconButton
            icon="bi bi-instagram"
            href="https://www.instagram.com/theogguu/"
            alt="@theogguu"
            aria-label="Steven's Instagram page"
          />
          <IconButton
            icon="bi bi-envelope"
            href="mailto:stevengu2024@u.northwestern.edu"
            alt="stevengu2024@u.northwestern.edu"
            aria-label="Email Steven Gu"
          />
        </div>
        
        <div className="resume">
          <a 
            href="/steven_gu_resume_fa23.pdf" 
            target="_blank" 
            alt="Steven's Resume" >
                <i>view my resume!</i></a>
        </div>
      </div>
    </section>
    </div>
  </div>
  <div className="col">
    <section className="My Projects">
    <CardList cards={cardContents} openModalAndSetContent={openModalAndSetContent} />
    </section>
    <section className="footer">
        <hr></hr>
        Built with <a href="https://react.dev/"> React.js</a>, 
        <a href="https://getbootstrap.com/"> Bootstrap</a>, 
        <a href="https://reactrouter.com/en/main"> React Router</a>, 
        and <a href="https://vitest.dev/">Vitest</a> and deployed with{" "}
        <a href="https://firebase.google.com/">Firebase</a>. Favicon generated
        by
        <a href="https://favicon.io/"> favicon.io</a>. Color palette designed by{" "}
        <a href="https://www.radix-ui.com/colors"> Radix</a>. Website design
        inspired by <a href="https://brittanychiang.com/"> Brittany Chang</a>.
      </section>
  </div>
</div>
</div>)};
export default HomePagePortrait;