import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import bcryptLogo from './assets/tech_logo/bcrypt.svg';
import argonLogo from './assets/tech_logo/argonLogo.png';
import cloudinaryLogo from './assets/tech_logo/cloudinaryLogo.webp';
import jwtLogo from './assets/tech_logo/JWTLogo.png';
import NodemailerLogo from './assets/tech_logo/Nodemailer.png';
import ashatech from './assets/company_logo/ashatech.png';
import vinitasri from './assets/work_logo/vinitasri.png';
import AshaTech from './assets/work_logo/AshaTech.png';
import WaveVisas from './assets/work_logo/WaveVisas.png';
import fireCommerce from './assets/work_logo/fireCommerce.png';
import excelAnalytics from "./assets/work_logo/excelAnalytics.png"
import blogpulse from "./assets/work_logo/blogPulse.png"
import schoolLogo from "./assets/education_logo/school.png"
import ignouLogo from "./assets/education_logo/ignou.png"
import tenthLogo from "./assets/education_logo/10.png"
import masterLogo from "./assets/education_logo/master.png"
import zidioLogo from "./assets/company_logo/zidioLogo.webp"

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material Ui', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },

    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Cloudinary', logo: cloudinaryLogo },
      { name: 'JWT', logo: jwtLogo },
      { name: 'Bcrypt', logo: bcryptLogo },
      { name: 'Argon2', logo: argonLogo },
      { name: 'Nodemailer', logo: NodemailerLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 2,
    img: ashatech,
    role: "Full Stack Developer - Intern",
    company: "Asha Tech",
    date: "July 2025 - Present",
    desc: "Worked as a full-stack developer on multi-modal and e-commerce projects, optimizing and building scalable UI components and web applications with React, Node.js, Express, MongoDB, and microservices to deliver responsive, high-performance sites.",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Javascript",
      "React.js",
      "Next.js",
      "Redux",
      "Framer Motion",
      "Git",
      "GitHub",
      "REST APIs",
      "Postman",
    ],
  },
  {
    id: 0,
    img: zidioLogo,
    role: "Fullstack Developer Intern Remote",
    company: "Zidio",
    date: "3 Months",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
    ],
  },

];

export const education = [
  {
    id: 0,
    img: masterLogo,
    school: "IGNOU , Delhi",
    date: "Persuing",
    grade: "*",
    desc: "I am pursuing my Master's degree (MCA) in Computer Applications from IGNOU, Delhi.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: ignouLogo,
    school: "MERIT, Delhi",
    date: "Sept 2021 - Aug 2024",
    grade: "65.5%",
    desc: "I completed my Bachelor's degree in Bachelor Of Computer Application (BCA) from IGNOU, Delhi.  Diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
    degree: "Bachelor of Computer Application - BCA ",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "PremChand High School Sarari, Siwan",
    date: "Apr 2019 - March 2021",
    grade: "78%",
    desc: "I completed my class 12 education from PremChand High School, Sarari, under the BSEB board, where I studied Physics, Chemistry, and Mathematics (PCM)",
    degree: "BSEB (XII) - Physics, Chemistry, Math ",
  },
  {
    id: 3,
    img: tenthLogo,
    school: "PremChand High School Sarari, Siwan",
    date: "Apr 2018 - March 2019",
    grade: "78%",
    desc: "I completed my class 10 education from PremChand High School, Sarari, under the BSEB board, where I studied Science with Math.",
    degree: "BSEB (X), Science with Math",
  },
];

export const projects = [
  {
    id: 1,
    title: "Wave Visas",
    description:
      "Wave Visas is a Delhi-based immigration agency making global dreams happen. They handle PR and visa applications—for countries like Canada, UK, Australia, and more—with expert help on resumes, documents, job search, and post-landing support",
    image: WaveVisas,
    tags: ["React JS", "Node.js", "Tailwind", "Framer Motion", "Node.js", "MongoDB", "Express", "JavaScript", "Framer Motion"],
    github: "https://github.com/NoorAzam-1",
    webapp: "https://wave-visas.vercel.app/",

  },
  {
    id: 2,
    title: "Excel Analytics",
    description:
      "Upload, visualize, and analyze your Excel files with powerful, AI-driven tools — all in one intuitive and beautiful app.",
    image: excelAnalytics,
    tags: ["React Js", "API", "Tailwind", "JavaScript", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/NoorAzam-1",
    webapp: "https://excel-analytics-rouge.vercel.app/",
  },
  {
    id: 3,
    title: "AskViniSri",
    description:
      "Ask VinitaSri is a spiritual-guidance platform offering access to ancient wisdom of Sri Vidya and Shakti. Users can ask questions related to practice, purpose, healing, transformation or any step on their spiritual path.",
    image: vinitasri,
    tags: ["Next JS", "Pyjthon", "Tailwind", "RAG", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/NoorAzam-1",
    webapp: "https://askvinitasri.com",
  },
  {
    id: 4,
    title: "AshaTech",
    description:
      "AshaTech is a Delhi NCR based digital agency crafting sleek web and mobile solutions—plus UI/UX design, SEO, and strategic IT consulting—to help businesses level up in the online world.",
    image: AshaTech,
    tags: ["React JS", "Node.js", "Tailwind", "Framer Motion", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/NoorAzam-1",
    webapp: "https://ashatech.co.in/",
  },
  {
    id: 5,
    title: "FireCommerce",
    description:
      "FireCommerce is a fashion e-commerce platform offering trendy apparel and accessories, featuring seasonal collections, bestsellers, and curated categories. The store delivers a modern shopping experience with sleek design, product showcases",
    image: fireCommerce,
    tags: ["Next JS", "Tailwind", "JavaScript", "Node Js", "MongoDB", "Express Js"],
    github: "https://github.com/NoorAzam-1",
    webapp: "https://firecomm.vercel.app/",

  },
  {
    id: 8,
    title: "BlogPulse",
    description:
      "BlogPulse is your platform for sharing stories, insights, and ideas. We provide a clean, simple, and powerful space for writers and readers to connect.",
    image: blogpulse,
    tags: ["React js", "Tailwind", "Javascript", "Express", "MongoDB", "Nodejs", "REST APIs"],
    github: "https://github.com/NoorAzam-1",
    webapp: "https://blog-pulse-delta.vercel.app/",
  },
];  