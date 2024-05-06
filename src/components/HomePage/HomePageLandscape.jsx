import CardList from "../CardList/CardList";
import Headshot from "../Headshot/Headshot";
import IconButton from "../IconButton/IconButton";

const HomePageLandscape = ({cardContents, openModalAndSetContent}) => {
  return (
    <div className="d-lg-none container">
      <section className="intro">
        <p id="one">Hi, I'm</p>
        <div className="title">Steven Gu</div>
        <Headshot src="/linkedin.jpg" alt="Steven Gu" size="12rem" />
        <div className="body">
          <hr></hr>
          <p>
            I'm a fourth-year student studying Computer Science and Biology at
            Northwestern University. I'm also an avid home cook, violinist,
            gamer, and TTRPG enthusiast.
          </p>
        </div>
      </section>

      <section className="My Links">
        <div className="profile-footer">
            <div className="icons">
            <IconButton
                icon="bi bi-github"
                href="https://github.com/theogguu"
                alt="Steven's GitHub page"
            />
            <IconButton
                icon="bi bi-linkedin"
                href="https://www.linkedin.com/in/steven-gu/"
                alt="Steven's LinkedIn page"
            />
            <IconButton
                icon="bi bi-instagram"
                href="https://www.instagram.com/theogguu/"
                alt="Steven's Instagram"
            />
            <IconButton
                icon="bi bi-envelope"
                href="mailto:stevengu2024@u.northwestern.edu"
                alt="Send Email to stevengu2024@u.northwestern.edu"
            />
            </div>
            <div className="resume">
            <a href="/steven_gu_resume_fa23.pdf" target="_blank">
                <i>
                <b>view my resume!</b>
                </i>
            </a>
            </div>
        </div>
      </section>
      <section className="My Projects">
      <CardList
        cards={cardContents}
        openModalAndSetContent={openModalAndSetContent}
      />
      </section>
      <section className="footer">
        <hr></hr>
        Built with <a href="https://react.dev/"> React</a> and
        <a href="https://nodejs.org/"> Node.js</a> and deployed with{" "}
        <a href="https://firebase.google.com/">Firebase</a>. Favicon generated
        by
        <a href="https://favicon.io/"> favicon.io</a>. Color palette designed by{" "}
        <a href="https://www.radix-ui.com/colors"> Radix</a>. Website design
        inspired by <a href="https://brittanychiang.com/"> Brittany Chang</a>.
      </section>
    </div>
  );
};

export default HomePageLandscape;