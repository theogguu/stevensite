import "./HomePage.css";
import IconButton from "../IconButton/IconButton";
import Card from "../Card/Card";


const HomePage = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-6 sticky-column">
              <p id="one">Hi, I'm</p>
              <div className="title">Steven Gu</div>
              <div className="body">
                <hr></hr>
                <p>
                  I'm an fourth-year student studying Computer Science and
                  Biology at Northwestern University. Outside of my studies, I'm
                  an avid home cook, violinist, gamer, and TTRPG enthusiast.
                </p>
              </div>
              <div className="icons">
                <IconButton
                  icon="bi bi-github"
                  href="https://github.com/theogguu"
                />
                <IconButton
                  icon="bi bi-linkedin"
                  href="https://www.linkedin.com/in/steven-gu/"
                />
                <IconButton
                  icon="bi bi-instagram "
                  href="https://www.instagram.com/theogguu/"
                />
                <IconButton
                  icon="bi bi-envelope "
                  href="mailto:stevengu2024@u.northwestern.edu"
                />
              </div>
            </div>
            <div className="col">
              <Card
                title="About Me"
                time="August 2021 - Present"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                earum tempora quam, maiores obcaecati officia dolorem corporis
                illum similique neque odit sapiente explicabo laudantium
                reprehenderit numquam itaque hic assumenda quas?"
                icon={<IconButton
                  icon="bi bi-github"
                  href="https://github.com/theogguu"
                />}
                href="https://steven-gu.com"
                tags={["React", "Node.js", "Express", "MongoDB"]}
              />
              <Card
                title="About Me"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                earum tempora quam, maiores obcaecati officia dolorem corporis
                illum similique neque odit sapiente explicabo laudantium
                reprehenderit numquam itaque hic assumenda quas?"
                icon={<IconButton
                  icon="bi bi-github"
                  href="https://github.com/theogguu"
                />}
                href="https://steven-gu.com"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia delectus sapiente animi molestias vel sequi culpa
                blanditiis ipsam id beatae veritatis quisquam ut dicta dolor ab
                eius magnam, ipsa repellendus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia delectus sapiente animi molestias vel sequi culpa
                blanditiis ipsam id beatae veritatis quisquam ut dicta dolor ab
                eius magnam, ipsa repellendus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia delectus sapiente animi molestias vel sequi culpa
                blanditiis ipsam id beatae veritatis quisquam ut dicta dolor ab
                eius magnam, ipsa repellendus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia delectus sapiente animi molestias vel sequi culpa
                blanditiis ipsam id beatae veritatis quisquam ut dicta dolor ab
                eius magnam, ipsa repellendus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia delectus sapiente animi molestias vel sequi culpa
                blanditiis ipsam id beatae veritatis quisquam ut dicta dolor ab
                eius magnam, ipsa repellendus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
