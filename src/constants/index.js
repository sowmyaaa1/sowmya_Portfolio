import { StringKeyframeTrack } from "three";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  sql,
  c,
  firebase,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  java,
  git,
  figma,
  bank,
  crypton,
  fundcare,
  meister,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
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
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "Firebase",
    icon: firebase,
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

const experiences = [
  {
    title: "React Native Developer",
    company_name: "SpaceScan.io",
    iconBg: "#383E56",
    date: "September 2022 - January 2023",
    points: [
      "Spacescan.io is a data analytical firm for chia blockchain-Built their mobile application using react native",
      "Built Api's on the backend using Node js and Postman",
    ],
  },
  
];



const projects = [
  {
    name: "Crypton",
    description:
      " cryptocurrency analysis platform , which shows the recent market trends.Our application also displays the exchange rates of various cryptocurrency.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CoinGecko API",
        color: "green-text-gradient",
      },
    ],
    image: crypton,
    source_code_link: "https://github.com/sowmyaaa1/Crypton",
  },
  {
    name: "FundCare",
    description:
      "Web application that enables patients to connect with hospitals for blood supplies, organ donation informations and also about the latest Healthcare Awareness events happening in India.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: fundcare,
    source_code_link: "https://github.com/sowmyaaa1/fundcare",
  },
  {
    name: "Mood-Meister",
    description:
      "MOODMEISTER is AI based web application, converts speech into text and showcase it as positive, negative and neutral reviews",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "AssemblyAI API",
        color: "green-text-gradient",
      },
    ],
    image: meister,
    source_code_link: "https://github.com/sowmyaaa1/Mood-meister",
  },
  {
    name: "Banking-Management-System",
    description:
      "A bank management system where you can transfer money from one user to another and also you can have a track of the transaction details .",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/sowmyaaa1/Banking-management-system",
  },
  {
    name: "Snake Game",
    description:
      "Snake Game is a Java Game application , which is similar to the game we all played in our childhood",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://github.com/sowmyaaa1/snake_game",
  },
  
  
];

export { services, technologies, experiences, projects };
