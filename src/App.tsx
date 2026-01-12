import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  Boxes,
} from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    languages: ["JavaScript", "TypeScript", "Rust", "Python"],
    backend: ["Node.js", "NestJS", "Express.js", "Django", "Anchor Framework"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Sequelize ORM"],
    blockchain: [
      "Solana",
      "Rust/Anchor",
      "Solana Web3.js",
      "Smart Contracts",
      "PDAs",
    ],
    cloud: ["AWS S3", "Cloudflare R2", "Cloudinary"],
    tools: ["RESTful APIs", "TSOA", "OpenAPI", "JWT", "OAuth", "Git", "CI/CD"],
  };

  const experience = [
    {
      role: "Co-Founder & Lead Backend Developer",
      company: "Farman.ng",
      period: "January 2024 - Present",
      description: "Multi-Tenant Agro-Commodities E-commerce Platform",
      highlights: [
        "Architected multi-tenant SaaS platform with custom domains",
        "Led migration from JavaScript to TypeScript (35% error reduction)",
        "Built secure file upload with Cloudflare R2 and presigned URLs",
        "Integrated TSOA for automatic API documentation",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Krikia",
      period: "May 2024 - October 2025",
      description: "Real Estate Marketplace",
      highlights: [
        "Engineered property inspection booking system",
        "Implemented web push notifications and file upload",
        "Integrated payment gateways (Flutterwave, Monnify)",
        "Built referral system and agent onboarding workflow",
      ],
    },
    {
      role: "Lead Developer",
      company: "Profarmr",
      period: "November 2023 - January 2024",
      description: "E-commerce Platform - Capstone Project",
      highlights: [
        "Architected full-stack e-commerce platform",
        "Implemented Redis caching (40% performance improvement)",
        "Built RESTful API with role-based access control",
      ],
    },
  ];

  const projects = [
    {
      name: "SubStream",
      description: "Decentralized Subscription Platform",
      details:
        "Built on Solana blockchain using Rust and Anchor framework. Implemented subscription management with on-chain state and 100% test coverage.",
      tech: ["Rust", "Anchor", "Solana Web3.js", "Next.js", "TypeScript"],
      link: "https://substream-app.vercel.app",
      featured: true,
    },
    {
      name: "Farman.ng",
      description: "Multi-Tenant SaaS E-commerce Platform",
      details:
        "Agro-commodities marketplace with vendor storefronts, custom domains, and integrated payment systems.",
      tech: ["Node.js", "TypeScript", "MySQL", "Redis", "Cloudflare R2"],
      featured: true,
    },
    {
      name: "Krikia",
      description: "Real Estate Marketplace",
      details:
        "Property platform with booking system, push notifications, and payment gateway integration.",
      tech: ["NestJS", "PostgreSQL", "React", "Next.js", "Cloudinary"],
      featured: true,
    },
    {
      name: "Task-Me-AI",
      description: "AI-Powered Task Management Platform",
      details:
        "Intelligent task breakdown using OpenAI integration with role-based access control.",
      tech: ["Node.js", "Express.js", "MySQL", "OpenAI API"],
      link: "https://task-me-ai.vercel.app",
      featured: true,
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? darkMode
              ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
              : "bg-white/95 backdrop-blur-sm shadow-lg"
            : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">AO</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Ademola Oduntan
          </h1>
          <p className="text-2xl md:text-3xl text-blue-500 mb-6">
            Backend Developer
          </p>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Building secure, scalable systems with Node.js, TypeScript, Rust,
            and Solana. Specialized in multi-tenant SaaS, blockchain, and
            payment integrations.
          </p>
          <div className="flex justify-center gap-4 pt-6">
            <a
              href="https://github.com/AdemolaSam"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100 shadow-md"
              }`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ademola-oduntan"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100 shadow-md"
              }`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:oduntanade2721@gmail.com"
              className={`p-3 rounded-lg transition-all hover:scale-110 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100 shadow-md"
              }`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p
            className={`text-lg leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Backend Developer with 2+ years of experience specializing in
            Node.js, NestJS, TypeScript, and Rust. I build secure, scalable
            RESTful APIs, multi-tenant SaaS applications, and blockchain
            systems. Experienced in payment gateway integration, database
            architecture, and cloud storage solutions.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className={`p-6 rounded-lg transition-all hover:scale-105 ${
                  darkMode ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  {category === "languages" && (
                    <Code2 className="w-5 h-5 text-blue-500" />
                  )}
                  {category === "databases" && (
                    <Database className="w-5 h-5 text-green-500" />
                  )}
                  {category === "cloud" && (
                    <Cloud className="w-5 h-5 text-purple-500" />
                  )}
                  {category === "blockchain" && (
                    <Boxes className="w-5 h-5 text-orange-500" />
                  )}
                  <h3 className="font-semibold capitalize">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg transition-all hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-blue-500">{exp.company}</p>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {exp.description}
                    </p>
                  </div>
                  <span
                    className={`text-sm mt-2 md:mt-0 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
                <ul
                  className={`space-y-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg transition-all hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-blue-500 mb-2">{project.description}</p>
                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.details}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs ${
                        darkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p
            className={`text-center ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Among other projects including e-commerce platforms, API
            integrations, and blockchain applications.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p
            className={`text-lg mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:oduntanade2721@gmail.com"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors font-semibold"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/ademola-oduntan"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-lg transition-colors font-semibold ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 text-center ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
          © 2025 Ademola Oduntan. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
