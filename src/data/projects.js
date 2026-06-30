import ai from "../assets/projects/ai-vigil-guard.png";
import expense from "../assets/projects/expense-tracker.png";
import freelance from "../assets/projects/freelance-finder.png";

export const projects = [
  {
    title: "AI Vigil Guard",
    description:
      "Real-time adversarial attack detection system for Machine Learning models with FastAPI and Streamlit dashboard.",
    tech: ["Python", "FastAPI", "Streamlit", "Scikit-learn"],
    github: "https://github.com/L-Nandini/Adversarial-AI-Defense-System",
    demo: "",
    deployed: false,
    image: ai,
  },

  {
    title: "Expense Tracker",
    description:
      "Full Stack application for managing income and expenses with secure authentication and dashboard.",
    tech: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/L-Nandini/Expense-Tracker",
    demo: "",
    deployed: false,
    image: expense,
  },

  {
    title: "Freelance Finder",
    description:
      "Platform connecting freelancers and clients with project posting and bidding features.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/L-Nandini/Freelance-Finder",
    demo: "",
    deployed: false,
    image: freelance,
  },
];
