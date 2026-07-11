import {
  backend,
  carrent,
  college,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  meta,
  mobile,
  mongodb,
  nodejs,
  office,
  reactjs,
  redux,
  school,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Cross Platform App Developer",
    icon: mobile,
  },
  {
    title: "Native Mobile App Developer",
    icon: backend,
  },
  {
    title: "Tech Enthusiast",
    icon: creator,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "School",
    company_name: "Kendriya Vidyalaya No. 2, Kribhco, Surat - CBSE",
    icon: school,
    iconBg: "#383E56",
    date: "2007 - 2019",
    points: [
      "Completed 10th Standard (SSC) in 2017 with a CGPA of 9.4 out of 10",
      "Completed 12th Standard (HSC) in 2019 with a percentage of 77.6%",
    ],
  },
  {
    title: "Computer Science & Engineering",
    company_name:
      "RV Insitute of Technology and Management, Bangalore - Affiliated to VTU",
    icon: college,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: [
      "Graduated with a CGPA of 7.83/10",
      "For engineering major project, Developed 'SmartSell', a retail sales analysis dashboard using Python and Streamlit, implementing machine learning algorithms for personalized recommendations",
      "Founding Member and Head-Coordinator of The Entrepreneurship Cell - Established the College Society with a motive to spread a word about Entrepreneurship and cultivate problem solving skills among the students of RVITM",
      "Organized and managed events with a team of 30+ coordinators, collaborating with various college societies",
    ],
  },
  {
    title: "Intern",
    company_name: "Zebra Technologies",
    icon: office,
    iconBg: "#383E56",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Assisted with troubleshooting and bug fixing in existing codebase",
      "Worked on cross-platform mobile application development using Flutter and Xamarin",
      "Participated in daily stand-up meetings, code reviews, and other team meetings to discuss project progress and identify areas for improvement",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Gida Technologies",
    icon: office,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Feb 2024",
    points: [
      "Contributed to the development and on-time delivery of two major Flutter projects, adhering to clean architecture principles and developing reusable widgets to ensure a scalable codebase.",
      "Developed core features for 5Paisa, a high-performance stock trading app for IIFL Holdings Ltd., including biometric and TOTP authentication, dynamic watchlists, and optimized order forms using state management for real-time data via REST APIs and sockets.",
      "Enhanced Jeet, a patient engagement app for Lupin Ltd., by integrating prescription uploads, medication reminders, and interactive in-app games, directly contributing to improved user engagement and retention.",
      "Implemented Bloc state management for real-time stock data and dynamic dashboards, working closely with Design, QA, and Client stakeholders to ensure seamless UI/UX delivery.",
      "Triaged and resolved crashes and performance issues reported in Sentry, helping reduce error rates and improve user experience.",
    ],
  },
  {
    title: "Software Engineer, I",
    company_name: "Zebra Technologies",
    icon: office,
    iconBg: "#383E56",
    date: "Mar 2024 - Jul 2026",
    points: [
      "Developed and maintained a Dart SDK to provide a consistent interface for cross-platform applications, enabling shared logic across Android, iOS, and Windows.",
      "Built Flutter applications with Method Channels to execute native code and access platform-specific system APIs and hardware features.",
      "Implemented comprehensive Unit Testing for Flutter and native bridges to ensure high code coverage and maintain stability.",
      "Ideated and implemented GenAI internal tools using Next.js, Python frameworks, GenAI libraries and OpenAI APIs, automating manual workflows and improving team efficiency.",
      "Developed custom AI Agents and Next.js web interfaces using a RAG approach, utilizing Vector Stores and function-calling for precise data processing.",
    ],
  },
  {
    title: "Software Engineer Professional, II",
    company_name: "Zebra Technologies",
    icon: office,
    iconBg: "#383E56",
    date: "Jul 2026 - Present",
    points: [
      "Continuing to work on the development of cross-platform applications and GenAI-powered tools, focusing on architectural improvements and team efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
