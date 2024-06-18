import {
    mobile,
    backend,
    creator,
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
    figma ,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit ,
    tripguide,
    threejs,
    school,
    college,
    office,
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
        "Completed 12th Standard (HSC) in 2019 with a percentage of 77.6%"
      ],
    },
    {
      title: "Computer Science & Engineering",
      company_name: "RV Insitute of Technology and Management, Bangalore - Affiliated to VTU",
      icon: college,
      iconBg: "#E6DEDD",
      date: "2019 - 2023",
      points: [
        "Graduated with a CGPA of 7.83/10",
        "For engineering major project, Developed 'SmartSell', a retail sales analysis dashboard using Python and Streamlit, implementing machine learning algorithms for personalized recommendations",
        "Founding Member and Head-Coordinator of The Entrepreneurship Cell - Established the College Society with a motive to spread a word about Entrepreneurship and cultivate problem solving skills among the students of RVITM",
        "Organized and managed events with a team of 30+ coordinators, collaborating with various college societies"
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
        "Participated in daily stand-up meetings, code reviews, and other team meetings to discuss project progress and identify areas for improvement"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Gida Technologies",
      icon: office,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Feb 2024",
      points: [
        "As a Flutter Developer, played a key role in the continuous development and timely delivery of two major projects, ensuring high standards of code quality and structure",
        "Collaborated closely with cross-functional teams and clients to implement a range of user-centric features and functionalities, enhancing app performance and user satisfaction",
        "Developed innovative solutions to complex technical challenges, consistently demonstrating a proactive approach in optimizing application functionality and user engagement"
      ],
    },
    {
      title: "Software Engineer, I",
      company_name: "Zebra Technologies",
      icon: office,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Rejoined Zebra Technologies as a Software Engineer, I, to work on the development of applications, leveraging my expertise in Flutter and Xamarin",
      ],
    },
  ];
  
  const  testimonials  =  [
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
      image : jobit,
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