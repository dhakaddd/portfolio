import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets';

import logos from "../assets/company/logos.png";

// 🔁 Import new tools/icons manually
import ae from "../assets/tech/ae.png";
import pr from "../assets/tech/pr.png";
import ps from "../assets/tech/ps.png";
import fi from "../assets/tech/fi.png";
import ai from "../assets/tech/ai.png";

// ✅ Navigation Links (NOW includes Home tab at top)
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
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

// 🧰 Tools/Technologies
const technologies = [
  {
    name: "After Effects",
    icon: ae,
  },
  {
    name: "Premiere Pro",
    icon: pr,
  },
  {
    name: "Photoshop",
    icon: ps,
  },
  {
    name: "Figma",
    icon: fi,
  },
  {
    name: "Illustrator",
    icon: ai,
  },
];

// 👨‍💼 Experience
const experiences = [
  {
    title: "Video Editor",
    company_name: "",
    icon: logos,
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Creating and editing short-form, long-form, and motion graphics content for various platforms.",
      "Collaborating closely with clients to understand their brand voice and visual goals.",
      "Utilizing Premiere Pro, After Effects, and AI tools to enhance storytelling and speed up workflow.",
      "Delivering platform-optimized content tailored for Instagram, YouTube, and Reels.",
    ],
  },
];

// 💬 Testimonials
const testimonials = [
  {
    testimonial:
      "Gaurav's edits completely elevated our short-form strategy. His pacing and attention to visual rhythm are outstanding.",
    name: "Liam Carter",
    designation: "Content Strategist",
    company: "VibeMedia Co.",
    image: firstTestimonial,
  },
  {
    testimonial:
      "The motion graphics Gaurav delivered were cinematic and smooth — perfect for our brand reels.",
    name: "Ethan Miller",
    designation: "Creative Director",
    company: "North Pixel",
    image: secondTestimonial,
  },
  {
    testimonial:
      "From raw clips to polished content, Gaurav’s editing was sharp, fast, and visually stunning. Highly recommended.",
    name: "Noah Brooks",
    designation: "Marketing Lead",
    company: "FrameBurst Studio",
    image: thirdTestimonial,
  },
];

// 🧠 Projects Section
const projects = [
  {
    name: "Tekisky Mart",
    description:
      "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories. Whether you're an automobile enthusiast or a professional, find everything you need to upgrade and repair.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance and simplify your lifestyle — all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

// ✅ Final export
export { technologies, experiences, testimonials, projects };
