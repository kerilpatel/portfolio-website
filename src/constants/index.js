import {
  awsCcpBadge,
  backend,
  claudeMarketplace,
  college,
  creator,
  logator,
  lumen,
  mobile,
  nvidiaGenAiBadge,
  office,
  school,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "recognition",
    title: "Recognition",
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

// Each `note` is a short (≤5 word) hover tooltip tying the skill to real work.
const skills = [
  {
    title: "Languages",
    items: [
      { name: "Dart", note: "Flutter SDK at Zebra Technologies" },
      { name: "Python", note: "Django backends, Logator, SmartSell" },
      { name: "Java", note: "Android native layer, Flutter SDK" },
      { name: "JavaScript", note: "React & Next.js web apps" },
      { name: "TypeScript", note: "Built Lumen AI document workspace" },
      { name: "SQL", note: "Zebra web app data layer" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Flutter", note: "Cross-platform printer SDK, Zebra" },
      { name: "React", note: "Lumen and Logator frontends" },
      { name: "Next.js", note: "Owned Zebra web app end-to-end" },
      { name: "Django", note: "Zebra web backend, Logator" },
    ],
  },
  {
    title: "Generative AI",
    items: [
      { name: "LLM APIs", note: "Lumen's bring-your-own-key LLMs" },
      { name: "RAG", note: "Shipped RAG assistant at Zebra" },
      { name: "Vector Stores", note: "Retrieval for Zebra RAG assistant" },
      { name: "Agentic Development", note: "Multi-agent workflows at Zebra" },
      { name: "MCP", note: "Built MCP integrations at Zebra" },
      { name: "Fine Tuning", note: "NVIDIA-Certified Generative AI LLMs" },
      {
        name: "Claude Code (Skills & Plugins)",
        note: "Published own Claude plugin marketplace",
      },
      { name: "LLM Evals", note: "Validating Zebra GenAI feature quality" },
      { name: "HITL", note: "Lumen's diff-preview AI edits" },
    ],
  },
  {
    title: "Architecture & Concepts",
    items: [
      { name: "Clean Architecture", note: "Layered Flutter SDK at Zebra" },
      {
        name: "Cross-Platform Development",
        note: "iOS, Android, Windows printer apps",
      },
      { name: "SDK & API Design", note: "Flutter SDK, Logator logging SDK" },
      { name: "State Management", note: "Complex device connection flows" },
      { name: "OAuth Integration", note: "Sign-in for Zebra web app" },
      {
        name: "Native Method Channels",
        note: "Flutter-to-native printer connectivity",
      },
      { name: "Unit Testing", note: "Edge-case rigor, praised by director" },
      {
        name: "Agile & SAFe Planning",
        note: "PI planning at Zebra Technologies",
      },
      { name: "CI/CD Automation", note: "Automated SDK builds and releases" },
    ],
  },
  {
    title: "APIs & Tools",
    items: [
      { name: "REST APIs", note: "Django APIs for Zebra webapp" },
      { name: "WebSockets", note: "Logator live-tail log streaming" },
      { name: "GitHub Actions", note: "CI pipelines for shipped projects" },
      { name: "Docker", note: "Containerized Logator deployment" },
      { name: "Sentry", note: "Production monitoring at Zebra" },
      { name: "Jira", note: "Sprint tracking at Zebra Technologies" },
      { name: "Confluence", note: "Documented Flutter SDK at Zebra" },
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
      "Founding Member and Head-Coordinator of The Entrepreneurship Cell - Established the College Society with a motive to spread a word about Entrepreneurship and cultivate problem solving skills among the students of RVITM, Organized and managed events with a team of 30+ coordinators.",
      "For engineering major project, Developed 'SmartSell', a retail sales analysis dashboard using Python and Streamlit, implementing machine learning algorithms for personalised recommendations",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Gida Technologies",
    icon: office,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Feb 2024",
    points: [
      "Built and shipped two applications handling both frontend and backend development from scratch in a fast-paced startup environment, working directly with clients to turn shifting requirements into working features.",
      "Owned development end-to-end — from implementation to client feedback loops — adapting quickly in a small-team, early-stage setting.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Zebra Technologies",
    icon: office,
    iconBg: "#383E56",
    date: "Mar 2024 - Aug 2026",
    points: [
      "Built a Flutter SDK & Mobile application for supporting our printers across platforms.",
      "Developed an web application, owning both frontend and backend - using NextJs and Django,  covering from design through deployment.",
      "Designed and shipped GenAI-powered features for customer-facing and internal tools, including RAG assistant, MCP, multi agentic workflows.",
    ],
  },
  {
    title: "Sr. Software Engineer",
    company_name: "Nexa Mobility",
    icon: office,
    iconBg: "#383E56",
    date: "Aug 2026 - Present",
    points: [
      "Building a project-tracking dashboard for top management, powered by an ETL pipeline and an LLM layer with RAG over rule-based metrics.",
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
    name: "Lumen",
    description:
      "AI document workspace with bring-your-own-key (BYOK) LLM support and human-in-the-loop, diff-preview AI edits, so every AI change is reviewed before it lands in your document.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
    ],
    image: lumen,
    source_code_link: "https://github.com/kerilpatel/lumen",
    live_demo_link: "https://lumen.kerilpatel.com",
  },
  {
    name: "Logator",
    description:
      "Log aggregation platform with replay-resistant HMAC ingest, a non-blocking logging SDK, and a live-tail dashboard for watching application logs stream in real time.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
    ],
    image: logator,
    source_code_link: "https://github.com/kerilpatel/logator",
    live_demo_link: "https://logator.kerilpatel.com",
  },
  {
    name: "Claude Plugin Marketplace",
    description:
      "Personal marketplace of Claude Code plugins, installable via /plugin, packaging agentic Skills that restructure and polish LaTeX documents for a target context, compile them to PDF, and push versioned results to GitHub.",
    tags: [
      {
        name: "claude-code",
        color: "blue-text-gradient",
      },
      {
        name: "agentic-ai",
        color: "green-text-gradient",
      },
      {
        name: "plugins",
        color: "pink-text-gradient",
      },
    ],
    image: claudeMarketplace,
    source_code_link:
      "https://github.com/kerilpatel/my-claude-plugin-marketplace",
  },
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    date: "Sep 2021",
    badge: awsCcpBadge,
    link: "https://www.credly.com/badges/32634e83-15e7-47e8-94df-d86af51046c3/public_url",
  },
  {
    name: "NVIDIA-Certified Associate: Generative AI LLMs",
    issuer: "NVIDIA",
    date: "Jul 2026",
    badge: nvidiaGenAiBadge,
    link: "https://www.credly.com/badges/b6032895-a039-445c-8d01-3d7455c2841d/public_url",
  },
];

const achievements = [
  {
    title: "2x Secure Code Warrior Tournament Winner",
    context: "Zebra Technologies",
    description:
      "Won the company-wide Secure Code Warrior tournament twice, demonstrating strong secure coding practices and application security awareness.",
    icon: "shield",
  },
  {
    title: "Best Presentation Award",
    context: "Technical Conference",
    description:
      "Received the Best Presentation Award at a technical conference for presenting a published research paper.",
    icon: "trophy",
    link: "https://tijer.org/tijer/viewpaperforall.php?paper=TIJERA001040",
    linkText: "View Paper",
  },
];

export {
  services,
  skills,
  experiences,
  testimonials,
  projects,
  certifications,
  achievements,
};
