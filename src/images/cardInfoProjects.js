import websiteLink from "../images/globe-grid.svg";
import YMCA from "../images/YMCA.png";

import { FaTerminal } from "react-icons/fa";

import exeFile from "../images/exe.svg";
import spotify from "../images/spotify.svg";
import UImpactify from "../images/UImpactify.png";
import { DiPython } from "react-icons/di";
import { GiGamepadCross, GiTeacher } from "react-icons/gi";
import { BsBoxArrowUpRight } from "react-icons/bs";

import { GiPoliceOfficerHead } from "react-icons/gi";

export const PostData = {
  experiences: [

    {
      title: "Software Developer",
      github: "",
      description: ["Developed and optimized SQL-based APIs, streamlining user validation, status checks, and event message processing", "Implemented efficient AWS Lambda functions, contributing to critical production updates and facilitating multi-environment testing", "Strengthened security measures with JWT token authentication and improved backend performance by optimizing user API calls", "Collaborated in the successful deployment of critical updates to production, demonstrating expertise in managing end-to-end backend development processes and ensuring the reliability of live systems"],
      tools: [],
      subtitle: (
        <span id="specialFontCase" style={{ fontFamily: "sans-serif" }}>
          Altus Group
        </span>
      ),
      type: "Full Time"
    },
    {
      title: "Software Developer",
      github: "",
      description: ["Automated charge creations for various merchant-facing fees streamlining the billing process and saving the billing ops team 25% of their time in Ruby on Rails", 
      "Revamped merchant facing UX by utilizing graphQL and React, creating a new UI and improving overall user experience", 
      "Designed and implemented a new validation process in preparation for BFCM (Black Friday, Cyber Monday), resulting in smoother transactions for merchants and their customers"],
      tools: [],
      subtitle: (
        <span id="specialFontCase" style={{ fontFamily: "sans-serif" }}>
          Shopify
        </span>
      ),
      type: "Internships"
    },
    {
      title: "Teaching Assistant (CSCD01)",
      github: "",
      description: [
        "Teaching Assistant for CSCD01 (Engineering Large Software Systems)",
        "Assist students with solving issues in the open source libraries: NumPy, Pandas, SciKit-Learn",
        "Grade students understanding on software design and implementation for efficiency and clean code"
      ],
      tools: [],

      subtitle: (
        <span id="specialFontCase" style={{ fontFamily: "sans-serif" }}>
          University of Toronto
        </span>
      ),
      type: "Part Time"
    },
    {
      title: "Software Developer",
      github: "",
      description: ["Collaborated on the development of the LCBO Kiosk machine, implementing new features, updating content, and fixing bugs to enhance the user experience using React and Electron", 
      "Integrated a map feature into the Kiosk, allowing users to easily locate individual store locations of products and improving overall usability in React", 
      "Managed testing, quality assurance, and project scoping across different countries and languages, ensuring seamless communication and successful project completion"],
      tools: [],
      subtitle: (
        <span id="specialFontCase" style={{ fontFamily: "sans-serif" }}>
          Cineplex Digital Medias
        </span>
      ),
      type: "Internships"
    },
    {
      title: "Open-Source Developer",
      github: "",
      description: ["Developed disjointed time buckets in Python for clustering information together, useful for retro-actioning and viewing representative media ", 
      "Performed benchmark testing in PyTest and using AWS Lambda to maximize efficiency with minimal memory cost", 
      "•	Created a custodian lambda for automating the HMA process over timed intervals, improving overall system automation"],
      tools: [],
      subtitle: (
        <span id="specialFontCase" style={{ fontFamily: "sans-serif" }}>
          MLH Fellowship
        </span>
      ),
      type: "Internships"
    },

    {
      title: "Full Stack Developer",
      github: "",
      description: [ "Reduced Firebase database calls by 60% by batch updating existing NoSQL queries",
        "Leveraged Google Cloud APIs to capture, process, and analyze voice input using machine learning",
        "Developed IELTS training modules using React and Styled Components, utilized by over 400 international university students"],
      tools: [],
      subtitle: (
        <span id="specialFontCase" style={{ fontFamily: "sans-serif" }}>
          University of Toronto
        </span>
      ),
      type: "Part Time"
    },

    {
      title: "Developer",
      github: "",
      description: [
        "Automated manual client forms improving efficiency by 20% through refining catalog items used by 200+ FundSERV members",
        "Configured virtual machine infrastructures using SQL to connect existing internal developer service portals",
        "Developed API integrations using JavaScript to transfer confidential client data across numerous platforms including salesforce and ServiceNow"
      ],
      
      tools: [],

      subtitle: (
        <span id="specialFontCase" style={{ fontFamily: "sans-serif" }}>
          FundSERV Inc.
        </span>
      ),
      type: "Internships"

    },

    {
      title: "Frontend Developer",
      github: "",
      description: ["Minimized page load time from seconds to instant by migrating from old university servers to GitHub Pages",
        "Designed and developed new UI screens using Figma, Bootstrap and JQuery for future organization events",
        "Facilitated weekly demo meetings using Microsoft Teams, showcasing features to 20+ organization executives" ],

      tools: [],
      subtitle: (
        <span id="specialFontCase" style={{ fontFamily: "sans-serif" }}>
          MEIO (Medical Education Initiative Organization)
        </span>
      ),
      type: "Part Time"
    },


    {
      title: "Teaching Assistant (CSCA20)",
      github: "",
      description: [
        "Teaching Assistant for CSCA20 (Introduction to Programming)",
        "Hold weekly tutorials and assist in marking process of examinations",
        "Answer student concerns about course material"
      ],
      tools: [],

      subtitle: (
        <span id="specialFontCase" style={{ fontFamily: "sans-serif" }}>
          University of Toronto
        </span>
      ),
      type: "Part Time"
    },
    
    {
      title: "AMACSSS",
      github: "",
      description: [
        "Hold midterm and final exam review seminars for first year students",
        "Weekly office hours to help students address issues with first year CSM courses",
        "Working alongside other team members to effectively run smooth events",
      ],
      tools: [],
      external: (
        <a href="https://www.amacss.org/" target="_blank" rel="noreferrer">
          <BsBoxArrowUpRight id="git" size="50px" alt="exeFile" />
        </a>
      ),

      img: <GiTeacher size="50px" color="yellow" />,
      link: (
        <div className="seminar">
          <div className="textProject text2">
            <a
              style={{ color: "#2dbed2" }}
              href="https://www.youtube.com/watch?v=bFNTCCG0ox8&t=1435s"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Click here to view our seminar for MATA31 (Calculus 1){" "}
            </a>{" "}
          </div>{" "}
        </div>
      ),
      subtitle: (
        <span id="specialFontCase" style={{ fontFamily: "sans-serif" }}>
          (The Association of Mathematical And Computer Science Students)
        </span>
      ),
      type: "Part Time"
    },

    {
      title: "Camp Counselor",
      github: "",
      description: [
        "Taught campers a range of outdoor activities and ensured the safe use and return of equipement",
        "Collaborated with a co-counselor to take charge with various different groups of children, including organizing and managing camper activities",
        "Made weekly planning schedules and reports to prevent repetitive activities ",
      ],
      tools: [],
      external: (
        <a
          href="https://ymcagta.org/camps-and-outdoor-education/join-our-camps-and-outdoor-education-team"
          target="_blank"
          rel="noreferrer"
        >
          <BsBoxArrowUpRight id="git" size="50px" alt="exeFile" />
        </a>
      ),
      img: (
        <img src={YMCA} width="50px" height="50px" color="#892711" alt="YMCA" />
      ),
      subtitle: (
        <span id="specialFontCase" style={{ fontFamily: "sans-serif" }}>
          YMCA
        </span>
      ),
      type: "Outdated"
    },
    {
      title: "YIPI",
      github: "",
      description: [
        "Setting up, conducting, and presenting numerous police events throughout the day",
        "Helped with police officers day to day activities such as organizing information and creating powerpoints",
        "Visited daycares, and other school events to help notify students and parents about available services and programs offered",
      ],
      tools: [],
      external: (
        <a
          href="http://www.torontopolice.on.ca/yipi/"
          target="_blank"
          rel="noreferrer"
        >
          <BsBoxArrowUpRight id="git" size="50px" alt="exeFile" />
        </a>
      ),
      img: <GiPoliceOfficerHead size="70px" color="grey" />,
      subtitle: (
        <span id="specialFontCase" style={{ fontFamily: "sans-serif" }}>
          (Youth In Policing Initiative,
          <span
            style={{
              color: "rgba(258, 153, 0, 0.95)",
            }}
          >
            {" "}
            Division 41
          </span>
          )
        </span>
      ),
      type: "Outdated"
    },
  ],
  projects: [
    {
      title: "DrawHub",
      github: "https://github.com/navn-r/drawhub",
      description: [
        "Created platform for multiple contributors to draw on canvas with real-time updates using NestJS and NX monorepo",
        "Notified contributors via email using Redis, Nest JS queues and SendGrid",
        "Implemented stitching functionality with identical behavior to GitHub’s fork feature",
      ],
      tools: [
        "Nx",
        "React + TypeScript",
        "NestJS",
        "Apollo GraphQL",
        "Socket.io",
        "Bull",
        "Nodemailer",
        "MongoDb",
        "Redis",
        "Auth0",
        "AWS S3",
        "Google Drive API",
        "Twilio SendGrid",
        "Docker",
        "Kubernetes",
        "DigitalOcean",
        "Nginx",
      ],
      external: (
        <a
          href="https://uimpactify.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BsBoxArrowUpRight id="git" size="50px" alt="exeFile" />
        </a>
      ),
      img: (
        <img
          src={UImpactify}
          width="50px"
          height="50px"
          color="green"
          alt="UImpactify"
        />
      ),
    },


    {
      title: "UImpactify",
      github: "https://github.com/Samyakk123/U-Impactify",
      description: [
        "Worked in a group of 7 to develop an online elearning platform",
        "Used version control with daily scrum meetings and the agile development process alongside tools like Jira and Git",
        "Supports the creation and deletion of courses, assessments, uploading files, searching for employment, etc.",
      ],
      tools: [
        "Angular",
        "MongoDb",
        "Socket.io",
        "Node",
        "Agile",
        "Chart.js",
        "GridFS",
        "Clarity",
        "Figma",
        "Jira",
        "ngx-file-drop",
      ],
      external: (
        <a
          href="https://uimpactify.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BsBoxArrowUpRight id="git" size="50px" alt="exeFile" />
        </a>
      ),
      img: (
        <img
          src={UImpactify}
          width="50px"
          height="50px"
          color="green"
          alt="UImpactify"
        />
      ),
    },
    {
      title: "Connect 4",
      github: "https://github.com/Samyakk123/Connect-4",
      description: [
        "Player vs player and player vs AI compatibility",
        "Uses minimax algorithm with alpha beta pruning to determine ideal moves",
        "Various difficulties to accomodate for all different types of players",
      ],
      tools: ["Java Swing", "WindowBuilder", "GUI", "Component events"],
      external: (
        <a href="https://www.dropbox.com/s/1kxzexp4036xide/Connect%20Four.exe?dl=0">
          <img src={exeFile} width="50px" height="50px" alt="exeFile" />
        </a>
      ),
      img: <GiGamepadCross size="50px" color="#892711" />,
    },
    {
      title: "Spotify API clone",
      github: "https://github.com/Samyakk123/Spotify-API-Clone",
      description: [
        "Able to upload and 'favourite' various songs",
        "Follow and unfollow other user profiles",
        "Make your own playlist and query songs based on followers",
      ],
      tools: ["Java", "Spring Boot", "MongoDb", "Neo4j"],
      external: "",
      img: <img src={spotify} width="50px" height="50px" alt="spotify" />,
    },

    {
      title: "Website portfolio",
      github: "https://github.com/Samyakk123/Personal-Website",
      description: [
        "Created using react, a frontend framework",
        "Used material-ui and particle.js for tooltips and background",
        "Hosted using netlify",
      ],
      tools: ["ReactJs", "Html", "CSS", "JavaScript", "Web Components"],
      external: "",
      img: (
        <a
          href="https://uimpactify.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={websiteLink} width="50px" height="50px" alt="exeFile" />
        </a>
      ),
    },
    {
      title: "Mock Linux Shell",
      github: "https://github.com/Samyakk123/Mock-Linux-Shell",
      description: [
        "In a group of three, created a mock fileSystem to micmic the functionality of the Linux Shell",
        "Followed Agile methodologies alongside various software design patterns",
        "Held daily scrum meetings to ensure productive workflow",
      ],
      tools: ["Java", "Agile", "Scrum", "OOP", "low coupling"],
      external: "",
      img: <FaTerminal size="50px" color="white" />,
    },
    {
      title: "Goblin Fighter",
      github: "https://github.com/Samyakk123/Goblin-fighters",
      description: [
        "Used PyCharm to create an interactive side-scroller game with custom designed classes to create autogenerating waves of titans and lasers",
        "Used a greenscreen to place ourselves as inanimate characters randomized upon starting of the game",
        "Initiated daily meetings to ensure effective communication and updates amongst partners",
      ],
      tools: ["Python", "PyCharm", "GUI", "Component events", "Mouse events"],
      external: "",
      img: <DiPython size="50px" color="yellow" />,
    },
  ],



};
