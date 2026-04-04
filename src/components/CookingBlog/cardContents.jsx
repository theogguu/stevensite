export const cardContents = [
  {
    title: "Software Test Engineer • GEMMACON NA",
    href: "https://gemmacon.com/en/",
    time: "July 2024 - Present",
    body: 'Currently working as a Software Test Engineer at GEMMACON NA with clients like Porsche and Mercedes-Benz.',
    tags: ["Python", "Test Automation", "API Testing", "Jira/Confluence"],
  },
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
  }]