import IconButton from "../IconButton/IconButton";
export const cardContents = [
  {
    title: "Developer • Crafty",
    time: "September 2023 - December 2023",
    body: 'Designed and developed a GPT-powered webservice dedicated to assisting users in crafting woodworking projects by providing users with instructions, materials, and purchase links given a query (e.g. "coffee table").',
    tags: ["Flask", "JavaScript", "Python", "HTML", "CSS"],
    modalContent: {
      title: "Crafty",
      body: [
        "Crafty is a GPT-powered AI assistant that assists users in their next woodworking project. Crafty works with users conversationally to help find a new project to build within their budget, then finds a blueprint online and parses it for the user. Upon further confirmation, Crafty links the user to where to buy the materials on Home Depot.",
        <br></br>,
        <br></br>,
        <img
          src={"/crafty-1.png"}
          alt={"Crafty"}
          style={{ maxWidth: "100%", height: "auto" }}
        />,
        <br></br>,
        <br></br>,
        "I built Crafty with fellow student Royce Mettler as a project for our ",
        <i>Practicum in Information Systems </i>,
        "course. We used OpenAI’s API to handle conversations, providing each GPT call with a system context, the chat history, and external functions to call (and when to call them with ",
        <a href="https://platform.openai.com/docs/guides/function-calling">
          function calling
        </a>,
        "). We built web-scraping functions with ",
        <a href="https://pypi.org/project/beautifulsoup4/">beautifulsoup4</a>,
        ", and scraped blueprints off of ",
        <a href="https://learn.kregtool.com/projects-plans/search/?plansearch">
          KregTool’s projects and plans
        </a>,
        ". Finally, we used ",
        <a href="https://www.bigboxapi.com/">
          BigBox’s Home Depot Product API{" "}
        </a>,
        "to find the web-scraped materials on Home Depot.",
        <br></br>,
        <br></br>,
        "The bulk of the back-end was written in Python, hosted on a Flask server, and the front-end was built with vanilla JavaScript, HTML, and CSS.",
      ],
    },
  },
  {
    title: "Software Engineer Intern • New Muses Project",
    time: "July 2023 - September 2023",
    body: "Designed Remix components adhering to design specifications to standardize future webpage development. Developed Flask-based APIs for front-end to MongoDB back-end interaction and automated MongoDB backups.",
    href: "https://www.newmusesproject.com/",
    tags: ["Remix", "React", "MongoDB", "Flask", "JavaScript", "HTML", "CSS"],
    modalContent: {
      title: "SWE Intern at New Muses Project",
      body: [
        "Over the summer, I worked as a Software Engineer Intern at New Muses Project, a non-profit organization that aims to provide a platform to find underrepresented classical composers and for artists to share their work. I worked with my mentor to work on a website overhaul for the organization.",
        <br></br>,
        <br></br>,
        "I was first involved in creating new API endpoints for the MongoDB database developing Python scripts for database backup. One notable project involved crafting a crontab-scheduled script that retrieved the latest database document from the production server, transferred it to the test server (while managing document deletion on the test server), and concluded by sending an email containing the console logs.",
        <br></br>,
        <br></br>,
        "As the internship progressed, my role shifted towards front-end development. I actively contributed to the construction of a Remix component library, aiding in the transition from their existing vanilla-JS-based webpages to Remix-based ones. I learned a lot about HTML/CSS, coding in React-like frameworks, and component refactoring, as well as the importance of accessible design.",
        <br></br>,
        <br></br>,
        "Here was a sample page I built with Remix:",
        <br></br>,
        <br></br>,
        <img
          src={"/nmp-1.png"}
          alt={"New Muses Project"}
          style={{ maxWidth: "100%", height: "auto" }} />
      ],
    },
  },
  {
    title: "Developer • PhotoApp",
    time: "June 2023",
    body: "Developed a multi-tier photo storage app by integrating a Python client, a Node.js/Express.js-based webservice, and AWS. Fully documented RESTful API.",
    href: "https://github.com/theogguu/aws-photoapp",
    icon: (
      <IconButton
        icon="bi bi-github"
        href="https://github.com/theogguu/aws-photoapp"
        alt="PhotoApp GitHub Repo"
      />
    ),
    tags: [
      "RESTful API",
      "AWS",
      "Node.js",
      "Express.js",
      "Python",
      "JavaScript",
    ],
    modalContent: {
      title: "PhotoApp",
      body: [
        "This was a multi-tier PhotoApp built with Python, JavaScript and Node/Express.js, and AWS services (EC2, S3 and RDS). A user can use the provided Python client to connect with our JS webservice that then access the AWS services and returns the appropriate data. This is now deprecated (because AWS keeps charging us ), but I fully documented our project to show our proof of concept.",
        <br></br>,
        <br></br>,
        "A user connects to our webservice with the provided Python client (or not). By using the webservice API, they can create users, upload or download images, search for certain stats (like images associated with a user), and more. A user has to use a userid to upload a photo and their photos are uploaded into their own bucket.",
        <br></br>,
        <br></br>,
        "Here's a rough diagram of our architecture:",
        <br></br>,
        <br></br>,
        <img
          src={"/photoapp-1.png"}
          alt={"photoapp"}
          style={{ maxWidth: "100%", height: "auto" }}
        />,
        <br></br>,
        <br></br>,
        "For more details (like web service API endpoints), ",
        <a href="https://github.com/theogguu/aws-photoapp" target="_blank">
          check out the GitHub repo!
        </a>,
      ],
    },
  },
  {
    title: "Full Stack Developer • Campus Kitchens NU",
    time: "April 2023 - May 2023",
    body: "Developed on a full-stack web application using React frontend and Node.js/Express backend to manage food inventory, shift records, and user records for Northwestern University’s Campus Kitchen.",
    tags: ["AWS", "React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    modalContent: {
      title: "Campus Kitchens NU",
      body: [
        <a href="https://sites.northwestern.edu/campuskitchen/" target="_blank">
          Campus Kitchens NU
        </a>,
        " is a student-led organization with a mission to reduce food waste and food insecurity within the Evanston community. Our team of four other developers and I collaborated on the creation of an internal-facing full-stack web application. This application was designed to aid volunteers in managing food inventory, shift records, and user information, thereby facilitating the redistribution of dining hall food that would otherwise go to waste.",
        <br></br>,
        <br></br>,
        "In the development process, we utilized React and HTML/CSS for the front-end, while the back-end was crafted using Node.js/Express.js. To ensure seamless hosting and database management, we leveraged AWS RDS and Elastic Beanstalk.",
        <br></br>,
        <br></br>,
        "As part of my role, I spearheaded research and design sprints aimed at gathering valuable client feedback on our prototypes. This experience emphasized the significance of regular and open communication with our client. To bring our ideas to life and receive constructive input, we employed Figma as our tool of choice for drafting and refining prototypes. This collaborative approach proved instrumental in creating a web application that effectively addresses food waste and insecurity concerns in the Evanston community.",
        <br></br>,
        <br></br>,
        "Here was a sample page we built:",
        <br></br>,
        <br></br>,
        <img
          src={"/ckdb-1.png"}
          alt={"Campus Kitchens NU Database"}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ],
    },
  },
  {
    title: "Rapid Prototyping Projects",
    time: "October 2023 - November 2023",
    body: "Designed and deployed 3 standalone React webapps in a 6 week time period. Each webapp interacted with Firebase storage and databases and included features like user authorization, unit testing, and CI/CD.",
    tags: [
      "Firebase",
      "React",
      "Vitest",
      "CI/CD",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    modalContent: {
      title: "Rapid Prototyping Projects",
      body: [
        "Rapid Prototyping is a class at Northwestern University teaches students how to quickly build and deploy webapps. In this class, my team and I built 3 standalone React webapps in a 6 week time period. Each webapp interacted with Firebase storage and databases and included features like user authorization, unit testing, and CI/CD.", 
        <br></br>,
        <br></br>,
        "I learned a lot about working in a rapid-paced environment with a small team. Frequent communication and keeping everyone well-informed of our project was critical. I’m proud to say that our bus factor was at the size of our full team of 6 members.",
<br></br>,
       <br></br>,
"We met multiple times a week with my team to work on our project in development sprints. We followed a build-measure-learn framework, where each week, we iteratively built a product, demonstrated it to the class, and learned from peer feedback (as well as internal team member feedback). We evaluated our teamwork and efforts weekly through mood charts and feedback forms.",
        <br></br>,
        <br></br>,
        "The projects we built were SkillSwap, a social app that connects people who want to learn new skills or hobbies, TimeSync, a when2meet-esque app that includes a ‘would rather not meet’ option, and EcoCommute, a social app that helps people find or host carpool requests.",
        <br></br>,
        <br></br>,

        <img
          src={"/rapid-all.png"}
          alt={"Rapid Prototyping Projects"}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ],
    }
    

  },
  // {
  //   title: "Portfolio Website",
  //   body: "I had a lot of fun designing this website!",
  //   href: "https://github.com/theogguu/stevensite-2",
  //   icon: (
  //     <IconButton
  //       icon="bi bi-github"
  //       href="https://github.com/theogguu/stevensite-2"
  //     />
  //   ),
  //   tags: ["React", "JavaScript", "HTML", "CSS"],
  // },
];