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
                openModalAndSetContent({
                  title: "Crafty",
                  body: [`Crafty is a GPT-powered AI assistant that assists users in their next woodworking project. Crafty works with users conversationally to help find a new project to build within their budget, then finds a blueprint online and parses it for the user. Upon further confirmation, Crafty links the user to where to buy the materials on Home Depot.`, 
                  <br></br>,<br></br>, 
                  <img src={'/crafty-1.png'} alt={"Crafty"} style={{maxWidth: "100%", height: "auto"}}/>,
                  <br></br>,<br></br>,
                  `I built Crafty with fellow student Royce Mettler as a project for our `,
                  <i>Practicum in Information Systems </i>,
                  `course. We used OpenAI’s API to handle conversations, providing each GPT call with a system context, the chat history, and external functions to call (and when to call them with `, 
                  <a href='https://platform.openai.com/docs/guides/function-calling'>function calling</a>, 
                  `). We built web-scraping functions with `, 
                  <a href='https://pypi.org/project/beautifulsoup4/'>beautifulsoup4</a>,
                  `, and scraped blueprints off of `,           
                  <a href='https://learn.kregtool.com/projects-plans/search/?plansearch'>KregTool’s projects and plans</a>, 
                  `. Finally, we used `,
                  <a href='https://www.bigboxapi.com/'>BigBox’s Home Depot Product API </a>,
                  `to find the web-scraped materials on Home Depot.`, 
                  <br></br>,<br></br>,
                  `The bulk of the back-end was written in Python, hosted on a Flask server, and the front-end was built with vanilla JavaScript, HTML, and CSS.`
                ]})
              }
            />
            <Card
              title="Software Engineer Intern • New Muses Project"
              time="July 2023 - September 2023"
              body="Designed Remix components adhering to design specifications to standardize future webpage development. Developed Flask-based APIs for front-end to MongoDB back-end interaction and automated MongoDB backups."
              href="https://www.newmusesproject.com/"
              tags={["Remix", "React", "MongoDB", "Flask", "JavaScript", "HTML", "CSS"]}
              onClick={() =>
                openModalAndSetContent({
                  title: "SWE Intern at New Muses Project",
                  body: [`Over the summer, I worked as a Software Engineer Intern at New Muses Project, a non-profit organization that aims to provide a platform for artists to share their work. I worked on a team of 3 developers to build a new website for the organization.`]
                })
              }
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
              onClick={() =>
                openModalAndSetContent({
                  title: "PhotoApp",
                  body: [`This was a multi-tier PhotoApp built with Python, JavaScript and Node/Express.js, and AWS services (EC2, S3 and RDS). A user can use the provided Python client to connect with our JS webservice that then access the AWS services and returns the appropriate data. This is now deprecated (because AWS keeps charging us ), but I fully documented our project to show our proof of concept.`,
                  <br></br>,<br></br>, 
                  `A user connects to our webservice with the provided Python client (or not). By using the webservice API, they can create users, upload or download images, search for certain stats (like images associated with a user), and more. A user has to use a userid to upload a photo and their photos are uploaded into their own bucket.`,
                  <br></br>,<br></br>, 
                  `Here's a rough diagram of our architecture:`,
                  <br></br>,<br></br>,
                  <img src={'/photoapp-1.png'} alt={"photoapp"} style={{maxWidth: "100%", height: "auto"}}/>,
                  <br></br>,<br></br>,
                  `For more details (like web service API endpoints), `,
                  <a href='https://github.com/theogguu/aws-photoapp' target="_blank">check out the GitHub repo!</a>
                ]
                })
              }
            />

            <Card
              title="Full Stack Developer • Campus Kitchens NU"
              time="April 2023 - May 2023"
              body="Developed on a full-stack web application using React frontend and Node.js/Express backend to manage food inventory, shift records, and user records for Northwestern University’s Campus Kitchen."
              tags={["AWS", "React", "JavaScript", "HTML", "CSS", "Bootstrap"]}
              onClick={() =>
                openModalAndSetContent({
                  title: "Campus Kitchens NU",
                  body: [
                  <a href='https://sites.northwestern.edu/campuskitchen/' target='_blank'>Campus Kitchens NU</a>,
                    ` is a student-led organization that aims to reduce food waste and food insecurity in the Evanston community by redistributing dining hall food that would otherwise be thrown away. A team of 4 developers and I built a full-stack web application to manage food inventory, shift records, and user records. We built the front-end with React and the back-end with Node.js/Express.js. We used AWS to host our webapp and database.`, 
                  ,<br></br>,<br></br>, 
                  ``,
                    <br></br>,<br></br>, 
                  `Here's a rough diagram of our architecture:`,
                  <br></br>,<br></br>,
                  <img src={'/photoapp-1.png'} alt={"photoapp"} style={{maxWidth: "100%", height: "auto"}}/>,
                  <br></br>,<br></br>,
                  `For more details (like web service API endpoints), `,
                  <a href='https://github.com/theogguu/aws-photoapp' target="_blank">check out the GitHub repo!</a>
                ]
                })
              }
           />

            <Card
              title="Rapid Prototyping Projects"
              body="Designed and deployed 3 standalone React webapps in a 6 week time period. Each webapp interacted with Firebase storage and databases and included features like user authorization, unit testing, and CI/CD."
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
                "Vitest",
                "CI/CD",
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
              Built with React and Node.js and deployed with Firebase. Favicon
              generated by
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
