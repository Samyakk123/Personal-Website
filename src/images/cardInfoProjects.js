import websiteLink from "../images/globe-grid.svg";
import YMCA from "../images/YMCA.png";

import { FaTerminal } from "react-icons/fa";

import exeFile from "../images/exe.svg";
import spotify from "../images/spotify.svg";
import UImpactify from "../images/UImpactify.png";
import connect4Game from "../images/ConnectFour.exe";
import { DiPython } from "react-icons/di";
import { GiGamepadCross, GiTeacher } from "react-icons/gi";
import { BsBoxArrowUpRight } from "react-icons/bs";

import { GiPoliceOfficerHead } from "react-icons/gi";

export const PostData = {
  projects: [
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
        <a href={connect4Game}>
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

  experiences: [
    {
      title: "AMACSS",
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
    },

    {
      title: "YMCA Camp Counselor",
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
    },
  ],
};
