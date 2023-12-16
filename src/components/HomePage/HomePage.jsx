import "./HomePage.css";
import { useState } from "react";
import IconButton from "../IconButton/IconButton";
import Card from "../Card/Card";
import Headshot from "../Headshot/Headshot";
import Modal from "../Modal/Modal";

const HomePage = () => {
  const [modalContent, setModalContent] = useState({}); // {title: "hi", body: "hi"}
  const setModal = (title, body) => setModalContent({ title, body });

  const [open, setOpen] = useState(false);
  const openModalAndSetContent = (modalContent) => {
    setOpen(true);
    setModal(modalContent.title, modalContent.body);
  };
  const closeModal = () => setOpen(false);

  return (
    <div className="content">
      <Modal open={open} close={closeModal}>
        {modalContent}
      </Modal>
      <div className="container">
        <div className="row">
          <div className="col-6 sticky-column">
            <p id="one">Hi, I'm</p>
            <div className="title">Steven Gu</div>
            <Headshot src="/linkedin.jpg" alt="Steven Gu" size="150px" />
            <div className="body">
              <hr></hr>
              <p>
                I'm an fourth-year student studying Computer Science and Biology
                at Northwestern University. I'm also an avid home cook,
                violinist, gamer, and TTRPG enthusiast.
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
              title="Developer • Crafty"
              time="September 2023 - December 2023"
              body='Designed and developed a GPT-powered webservice dedicated to assisting users in crafting woodworking projects by providing
              users with instructions, materials, and purchase links given a query (e.g. "coffee table").'
              tags={["Flask", "JavaScript", "Python", "HTML", "CSS"]}
              onClick={() =>
                openModalAndSetContent({ title: "hi", body: "hi" })
              }
            />
            <Card
              title="Software Engineer Intern • New Muses Project"
              time="July 2023 - September 2023"
              body="Designed Remix components adhering to design specifications to standardize future webpage development. Developed Flask-based APIs for front-end to MongoDB back-end interaction and automated MongoDB backups."
              href="https://www.newmusesproject.com/"
              tags={["Remix", "MongoDB", "Flask", "JavaScript", "HTML", "CSS"]}
            />
            <Card
              title="Developer • PhotoApp"
              time="June 2023"
              body="Developed a multi-tier photo storage app by integrating a Python client, a Node.js/Express.js-based
              webservice, and AWS. Fully documented RESTful API."
              href="https://github.com/theogguu/aws-photoapp"
              icon={
                <IconButton
                  icon="bi bi-github"
                  href="https://github.com/theogguu/aws-photoapp"
                />
              }
              tags={[
                "RESTful API",
                "AWS",
                "Node.js",
                "Express.js",
                "Python",
                "JavaScript",
              ]}
            />

            <Card
              title="Developer • Campus Kitchens NU"
              time="April 2023 - May 2023"
              body="Led development on a full-stack web application using React frontend and Node.js/Express backend to manage food inventory, shift records, and user records for Northwestern University’s Campus Kitchen."
              tags={["AWS", "React", "JavaScript", "HTML", "CSS", "Bootstrap"]}
            />

            <Card
              title="Rapid Prototyping Projects"
              body="Designed 3 standalone React webapps in a 6 week time period. Each webapp interacted with Firebase storage and databases."
              href="https://github.com/theogguu/stevensite-2"
              icon={
                <IconButton
                  icon="bi bi-github"
                  href="https://github.com/theogguu/stevensite-2"
                />
              }
              tags={[
                "Firebase",
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Bootstrap",
              ]}
            />

            <Card
              title="Portfolio Website"
              body="I had a lot of fun designing this website!"
              href="https://github.com/theogguu/stevensite-2"
              icon={
                <IconButton
                  icon="bi bi-github"
                  href="https://github.com/theogguu/stevensite-2"
                />
              }
              tags={["React", "JavaScript", "HTML", "CSS"]}
            />

            <div className="footer">
              <hr></hr>
              Built with React and Node.js and deployed with
              Firebase. Favicon generated by 
              <a href="https://favicon.io/"> favicon.io</a>. Website design
              inspired by{" "}
              <a href="https://brittanychiang.com/"> Brittany Chang</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
