/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Kamrul Hasan ",
  title: "Hi all, I'm Kamrul",
  subTitle: emoji([
    "Front End Developer 👨‍💻",
    "Computer Diploma Engineer 😃😃",
    "Backend Developer 🧑‍💻",
  ]),
  resumeLink:
    "https://drive.google.com/file/d/1AEFaFqPV0Il1lO_4SiSOWpAPt80t2azo/view",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/kamrulcoder",
  linkedin: "https://www.linkedin.com/in/kamrulcoder",
  gmail: "kamrulcoder@gmail.com",
  facebook: "https://www.facebook.com/kamrulcoder",
  twitter: "https://twitter.com/kamrulcoder",
};

// Your Skills Section

const skillsSection = {
  title: "Skills",
  subTitle:
    "I want to always keep myself engaged in learning something new of programming.",

  allskills: {
    language: [
      {
        skillName: "C",
        classname: "cib:c",
        status: "Beginner",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "C-Sharp",
        classname: "logos:c-sharp",
        status: "Beginner",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Python",
        classname: "logos:python",
        status: "Beginner",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "java",
        classname: "logos:java",
        status: "Beginner",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Javascript",
        classname: "logos:javascript",
        status: "Intermediate",
        style: {
          backgroundColor: "transparent",
        },
      },
    ],

    designs: [
      {
        skillName: "Html",
        classname: "icon-park:html-five",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Css",
        classname: "vscode-icons:file-type-css",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Bootstrap",
        classname: "logos:bootstrap",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Javascript",
        classname: "logos:javascript",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Material UI",
        classname: "logos:material-ui",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "ES6",
        classname: "logos:es6",
        style: {
          backgroundColor: "transparent",
        },
      },
    ],

    frontends: [
      {
        skillName: "React Js ",
        classname: "logos:react",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Next Js",
        classname: "logos:nextjs",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "React Redux",
        classname: "logos:redux",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Jquery ",
        classname: "fontisto:jquery",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Firebase ",
        classname: "logos:firebase",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Chart Js",
        classname: "file-icons:chartjs",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "React Router  ",
        classname: "logos:react-router",
        style: {
          backgroundColor: "transparent",
        },
      },
    ],

    backends: [
      {
        skillName: "Node  Js ",
        classname: "la:node-js",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Express Js ",
        classname: "simple-icons:express",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Rest Api ",
        classname: "bi:server",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: " Api ",
        classname: "eos-icons:api",
        style: {
          backgroundColor: "transparent",
        },
      },
    ],

    databases: [
      {
        skillName: " MySql ",
        classname: "logos:mysql",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: " Microsoft Sql ",
        classname: "mdi:microsoft-access",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: " Mongodb ",
        classname: "logos:mongodb",
        style: {
          backgroundColor: "transparent",
        },
      },
    ],
    tools: [
      {
        skillName: " Postman ",
        classname: "logos:postman-icon",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: " Figma ",
        classname: "logos:figma",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: " Canva ",
        classname: "arcticons:canva",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: " Heroku ",
        classname: "logos:heroku-icon",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Netlify ",
        classname: "logos:netlify",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "VS Code  ",
        classname: "vscode-icons:file-type-vscode2",
        style: {
          backgroundColor: "transparent",
        },
      },
    ],
  },
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8801929394261",
  email_address: "kamrulcoder@gmail.com",
};

const projects = [
  {
    image: "mern-ecommerce.jpg",
    title: "mern Ecommerce Project ",
    desc: "Mern Ecommerce Description ",
    features: [
      "Admin product, User , Order  management",
      "Full featured shopping cart",
      "Mark orders as delivered option",
      "Checkout process (shipping, payment method, etc)",
      "PayPal / credit card integration"
    ],

classname: [
      "logos:javascript",
      "logos:react",
      "icon-park:html-five",
      "vscode-icons:file-type-css",
      "logos:bootstrap",
    ],
    codeLink: "https://github.com/kamrulcoder/mern-ecommerce",
    liveLink: "https://mern-ecommerce22.herokuapp.com/",
  },
  {
    image: "mern-ecommerce.jpg",
    title: "Next  Ecommerce Project ",
    desc: "Mern Ecommerce Description ",
    features: [
      "Admin product, User , Order  management",
      "Full featured shopping cart",
      "Mark orders as delivered option",
      "Checkout process (shipping, payment method, etc)",
      "PayPal / credit card integration"
    ],

classname: [
      "logos:javascript",
      "logos:react",
      "icon-park:html-five",
      "vscode-icons:file-type-css",
      "logos:bootstrap",
    ],
    codeLink: "https://github.com/kamrulcoder/mern-ecommerce",
    liveLink: "https://mern-ecommerce22.herokuapp.com/",
  },
  {
    image: "mern-ecommerce.jpg",
    title: "React  Ecommerce Project ",
    desc: "Mern Ecommerce Description ",
    features: [
      "Admin product, User , Order  management",
      "Full featured shopping cart",
      "Mark orders as delivered option",
      "Checkout process (shipping, payment method, etc)",
      "PayPal / credit card integration"
    ],

classname: [
      "logos:javascript",
      "logos:react",
      "icon-park:html-five",
      "vscode-icons:file-type-css",
      "logos:bootstrap",
    ],
    codeLink: "https://github.com/kamrulcoder/mern-ecommerce",
    liveLink: "https://mern-ecommerce22.herokuapp.com/",
  },




];

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  contactInfo,
  openSource,
  projects,
};
