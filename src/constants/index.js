import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  codeRefactor,
  passwordGen,
  javaQuiz,
  weatherDash,
  walkPerson,
  spotter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Code Refactor",
    description:
      "One of my first projects. This is a simple refactor of all the code in a HTML doc. It was a good practice for analyzing and debugging code as well as gaining a deeper understanding of the semantic meaning of HTML elements.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: codeRefactor,
    source_code_link: "https://github.com/mhengerer/Refactoring-Challenge",
  },
  {
    name: "Password Generator",
    description:
      "This is a JavaScript based application that generates a random password for the user based on qualifications submitted. It will then display that random password. This project started to show me what is possible with JavaScript.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: passwordGen,
    source_code_link: "https://github.com/mhengerer/Password-Generator",
  },
  {
    name: "JavaScript Quiz",
    description:
      "This is a quiz games for developers early on in there JavaScript journey. It takes the user through questions that cover the basics of JS. This is also made from primarily JavaScript making its purpose as much a demonstration of my abilities to write vanilla JS but also a fun game for a user to participate in and continue to review JS basics.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: javaQuiz,
    source_code_link: "https://github.com/mhengerer/JavaScript-Quiz-Game",
  },
  {
    name: "Weather Dashboard",
    description:
      "This Weather Dashboard uses Skeleton CSS Framework for styling and the openweathermap API to get weather data for anywhere in the world the user needs. This project helped me better understand JavaScript and how to parse through data returned from a fetch request.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "skeletoncss",
        color: "pink-text-gradient",
      },
    ],
    image: weatherDash,
    source_code_link: "https://github.com/mhengerer/Weather-Dashboard-App",
  },
  {
    name: "WalkPerson",
    description:
      "An online and mobile application made for the purpose of creating a playlist of appropriate length and mood for a hike, walk or a stroll; helping to take the thought work out of finding the music to fit your needs. Through out the project we used team work and an agile work enviroment to produce the industry standard D.R.Y. code, challenging ourseleves to think outside the box and do something that has yet to be done.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "orange-text-gradient",
      },
      {
        name: "skeletoncss",
        color: "pink-text-gradient",
      },
    ],
    image: walkPerson,
    source_code_link: "https://github.com/mhengerer/WalkPerson",
  },
  {
    name: "Spotter",
    description:
      "Spotter is an online application to be used for creating, storing, and doing workouts. Through a simple process of selecting exercises, the user can build their own workout routines using their favorite exercises or new ones! Spotter can help you learn how to perform movements on the fly, so it's the perfect gym buddy.",
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "handlebars",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: spotter,
    source_code_link: "https://github.com/mhengerer/Spotter",
  },
];

export { services, technologies, projects };
