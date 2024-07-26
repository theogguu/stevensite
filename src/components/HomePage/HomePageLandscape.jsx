import CardList from "../CardList/CardList";
import IconButton from "../IconButton/IconButton";
import HomePageIntro from "./HomePageIntro";

const HomePageLandscape = ({cardContents, openModalAndSetContent}) => {
  return (
    <div className="d-lg-none container">
      <HomePageIntro />

      <section className="My Links">
        <div className="profile-footer">
            <div className="icons" data-cy="intro-icons">
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
            <a href="/stevengu_resume_spr24.pdf" target="_blank">
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
  );
};

export default HomePageLandscape;