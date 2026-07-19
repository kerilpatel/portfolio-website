import {
  backend,
  carrent,
  college,
  creator,
  jobit,
  mobile,
  nvidiaGenAiBadge,
  office,
  school,
  tripguide,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Generative AI Engineer",
    icon: creator,
  },
  {
    title: "Cross-Platform App Developer",
    icon: mobile,
  },
  {
    title: "Backend & SDK Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const skills = [
  {
    title: "Languages",
    items: ["Dart", "Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["Flutter", "React", "Next.js", "Django"],
  },
  {
    title: "Generative AI",
    items: [
      "LLM APIs",
      "RAG",
      "Vector Stores",
      "Agentic Development",
      "MCP",
      "Fine Tuning",
      "Claude Code (Skills & Plugins)",
      "LLM Evals",
      "HITL",
    ],
  },
  {
    title: "Architecture & Concepts",
    items: [
      "Clean Architecture",
      "Cross-Platform Development",
      "SDK & API Design",
      "State Management",
      "OAuth Integration",
      "Native Method Channels",
      "Unit Testing",
      "Agile & SAFe Planning",
      "CI/CD Automation",
    ],
  },
  {
    title: "APIs & Tools",
    items: [
      "REST APIs",
      "WebSockets",
      "GitHub Actions",
      "Docker",
      "Sentry",
      "Jira",
      "Confluence",
    ],
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
      "Built two Flutter apps with clean architecture and reusable widgets, following design guidelines for a scalable codebase.",
      "Developed core features for 5Paisa, a high-performance stock trading app for IIFL Holdings Ltd., including biometric and TOTP authentication, dynamic watchlists, and optimized order forms using state management for real-time data via REST APIs and sockets.",
      "Enhanced Jeet, a patient engagement app for Lupin Ltd., by integrating prescription uploads, medication reminders, and interactive in-app games built on the Flame engine with Bloc state management, improving user engagement and retention.",
      "Triaged and resolved crashes and performance issues reported in Sentry, raising crash-free sessions to 97%.",
    ],
  },
  {
    title: "Software Engineer, I",
    company_name: "Zebra Technologies",
    icon: office,
    iconBg: "#383E56",
    date: "Mar 2024 - Jun 2026",
    points: [
      "Developed a Dart SDK implementing printer communication features, using Method Channels to execute native code and access platform-specific APIs for a scalable interface across Android, iOS, and Windows in the Flutter app.",
      "Implemented Android Intent-based APIs enabling third-party apps to trigger direct print passthrough and query real-time printer data without launching the Zebra Print app.",
      "Integrated Box & Dropbox cloud storage into the Zebra Print app using OAuth 2.0, with offline caching for file management.",
      "Implemented comprehensive Unit Testing for Flutter and native bridges, maintaining 85% code coverage for SDKs and apps.",
      "Built and deployed a RAG chatbot over SDK and printer documentation on a Django backend, vectorized into Vector Stores and queried via OpenAI APIs with function-calling, served through a Next.js interface for customer self-service.",
      "Built a Claude Code plugin (Skills + MCP) with Jira, Confluence, and GitHub integrations that turns initiatives into structured Jira Epics and Stories, cutting story-writing errors and PM rework by 35–40%.",
      "Developed an AI agent for automated release notes, triggered by GitHub Actions on production merges, correlating commit history with linked Jira stories via MCP to publish structured release summaries without manual effort.",
    ],
  },
  {
    title: "Software Engineer, II",
    company_name: "Zebra Technologies",
    icon: office,
    iconBg: "#383E56",
    date: "Jul 2026 - Present",
    points: [
      "Built an offline auto-configuration feature backed by SQLite, with cross-platform UI parity across platforms.",
      "Mentoring interns on agentic workflows, collaborating on developing Claude Code plugins, MCP integrations, and LLM Evals.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I worked with Keril on our mobile application team, where he consistently delivered high-quality features end to end. He built out complex connection-handling flows for mobile devices (iOS, Android, and Windows), taking ownership from UI design through backend data integration. What stood out most was his thoroughness — Keril has a strong eye for edge cases and a methodical approach to debugging. He's comfortable stepping outside his core mobile work to contribute to broader engineering initiatives, including internal AI tooling efforts. Keril is a dependable, detail-oriented engineer who raises the quality bar on any feature he touches. I'd welcome the chance to work with him again.",
    name: "Bret Anno",
    designation: "Director, Software Engineering",
    company: "Zebra Technologies",
    image:
      "https://ui-avatars.com/api/?name=Bret+Anno&background=0D8ABC&color=fff&size=128",
  },
  {
    testimonial:
      "I had the pleasure of working with Kiril and watching him grow from a talented intern into an indispensable asset to our team. Right from day one, he stood out for his ability to learn rapidly and transition seamlessly into contributing to live, mission-critical projects. What truly sets Kiril apart is his proactive mindset — he consistently upgraded his skills to match evolving demands and quickly became our absolute go-to person for all AI initiatives and adoptions. His focus, dedication, and technical agility are rare to find. Kiril is a top-tier professional who would be a highly valuable resource to any engineering organization, and I highly recommend him.",
    name: "Manjunath Gundurao",
    designation: "Engineering Manager",
    company: "Zebra Technologies",
    image:
      "https://ui-avatars.com/api/?name=Manjunath+Gundurao&background=2E7D32&color=fff&size=128",
  },
  {
    testimonial:
      "Having studied alongside Keril, I've always been impressed by his initiative. A perfect example of this was when he founded our college's E-Cell club. He took on the massive responsibility of organizing and executing all of the club's events, consistently delivering successful outcomes through sheer dedication and sharp problem-solving. Beyond his strong work ethic, he is an excellent collaborator who brings out the best in everyone around him. If you are looking for someone who takes complete ownership and drives results, I highly recommend him!",
    name: "Anjali S Acharya",
    designation: "DevOps | Network Specialist",
    company: "Peer & Colleague",
    image:
      "https://ui-avatars.com/api/?name=Anjali+Acharya&background=7B1FA2&color=fff&size=128",
  },
  {
    testimonial:
      "I had the pleasure of working with Keril for nearly three years on several Flutter application and SDK projects, as well as a few AI-based initiatives. Keril has a strong technical foundation and is always eager to learn and embrace new technologies. He approaches every task with dedication, takes ownership of his work, and consistently strives to deliver high-quality solutions. Beyond his technical abilities, Keril is approachable, collaborative, receptive to feedback, and brings a positive attitude to the team. I truly enjoyed working with Keril and highly recommend him to anyone looking for a skilled, dependable, and motivated software engineer.",
    name: "Abhilash K",
    designation: "Software Architect",
    company: "Zebra Technologies",
    image:
      "https://ui-avatars.com/api/?name=Abhilash+K&background=C62828&color=fff&size=128",
  },
  {
    testimonial:
      "I worked with Keril as he was handling our trading application development and the features keril built are exceptionally well. Keril has exceptional knowledge of development and he understands the domain and severity very well. Grasping power is very good.",
    name: "Harsh Shah",
    designation: "Senior Manager Product",
    company: "5paisa, Ex. IIFL",
    image:
      "https://ui-avatars.com/api/?name=Harsh+Shah&background=00695C&color=fff&size=128",
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

const certifications = [
  {
    name: "NVIDIA-Certified Associate: Generative AI LLMs",
    issuer: "NVIDIA",
    date: "Jul 2026",
    badge: nvidiaGenAiBadge,
    link: "https://www.credly.com/badges/b6032895-a039-445c-8d01-3d7455c2841d/public_url",
  },
];

export {
  services,
  skills,
  experiences,
  testimonials,
  projects,
  certifications,
};
