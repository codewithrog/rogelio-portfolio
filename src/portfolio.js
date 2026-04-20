/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rogelio Rolle",
  title: "Hi, I'm Rogelio also known BYTE",
  subTitle: emoji(
    "A Bachelor of Science in Information Technology Student and passionate about full-stack development. Still growing and learning about technology."
  ),
  resumeLink:
    "None", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/codewithrog",
  gmail: "rogeliorolle20@gmail.com",
  gitlab: "https://gitlab.com",
  facebook: "https://www.facebook.com/rogelio.rolle19",
  medium: "https://medium.com",
  stackoverflow: "None",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What Skills I have",
  subTitle: "A SLOW LEARNER BSIT STUDENT THAT WANTS TO BECOME FULL STACK DEVELOPER",
  skills: [
    emoji(
      "⚡ I can develop small projects or UI in figma, with transitions and animations"
    ),
    emoji("⚡ I can develop beginner style website with responsive UI"),
    emoji(
      "⚡ I can do basic SQL Database and create a data inside of it"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pamantasan ng Lungsod ng Valenzuela",
      logo: require("./assets/images/plv.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "August 2024 - Present",
      desc: "A bachelor's degree with specialized in fundamentals, programming languages and data or security structures.",
      descBullets: [
        "Participated in IT competitions",
        "Developing research about Artificial Intelligence"
      ]
    },
    {
      schoolName: "St. Paul Christian School",
      logo: require("./assets/images/spcs.png"),
      subHeader: "TVL-Information Communication and Technology",
      duration: "June 2023 - April 2025",
      desc: "Ranked top 5 in major subjects, certification of top website created and With Honors",
      descBullets: ["A competitive student in my SHS era"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Internship — SQL",
      company: "IBM - Philippines Based",
      companylogo: require("./assets/images/IBM.png"),
      date: "March 2024 – April 2024",
      desc: "Learned basic SQL commands and database concepts ",
      descBullets: [
        "Learned and applied basic SQL commands (SELECT, INSERT, UPDATE, DELETE)",
        "Created and managed simple databases and tables"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Freelance",
      companylogo: require("./assets/images/RO.jpg"),
      date: "August 2024 – Present",
      desc: "A freelancer with a small projects"
    }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Personal Website Portfolio",
  projects: [
    {
      image: require("./assets/images/project-1.png"),
      projectName: "PFL Personize",
      projectDesc: "A personal developed website for future portfolio",
      footerLink: [
        {
          name: "Visit Website",
          url: "None"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/project-2.png"),
      projectName: "Basic School Website ",
      projectDesc: "A final project for school requirement that for school website.",
      footerLink: [
        {
          name: "Visit Website",
          url: "None"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Vacant",
      subtitle:
        "Vacant section for future certification or awards.",
      image: require("./assets/images/VACANT.jpg"),
      imageAlt: "Vacant",
      footerLink: [
        {
          name: "Certification",
          url: "None"
        },
        {
          name: "Award Letter",
          url: "None"
        }
      ]
    },
    {
      title: "Oracle Dev Gym",
      subtitle:
        "Completed an online course from our SQL Instructor. I gain this during an training session.",
      image: require("./assets/images/OC.jpg"),
      imageAlt: "SQL Database Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "None"
        }
      ]
    }      
  ],  
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Getting to know what is my journery as we talk in blogs!",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "none",
      title: "Basic JavaScript Concepts Every Beginner Should Know",
      description:
        "Understood core JavaScript concepts such as variables, functions, loops, arrays, and conditionals"
    },
    {
      url: "None",
      title: "Why Vibe Coding is The Best?",
      description:
        "Highlights how AI helps beginners write, understand, and debug code with less difficulty. Now a days vibe coding is part of the daily life in IT professional world so game on!."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Favorite Music 🎵"),
  subtitle: "I LOVE THIS MUSIC IT'S FEELS ME MORE LIVELY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/track/5pvlSx0s2w3nKuyfrFnYBZ"
  ],
  display: true// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+639087208061",
  email_address: "rogeliorolle20@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "rogelio_rolle", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
