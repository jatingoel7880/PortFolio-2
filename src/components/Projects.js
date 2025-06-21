import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: "Digital Company CRM",
      description: "Developed a full-stack CRM with OTP authentication and role-based access control. Implemented dynamic subscription billing scaled by team size, streamlined data imports via bulk CSV/Excel processing with validation, reduced data errors by 75% through automated validation, and integrated with VICI Dial for real-time campaign management.",
      image: "/images/digital/login.png",
      technologies: ["React.js", "Node.js", "MongoDB", "VICI Dial API", "OTP Auth", "Role-based Access"],
      category: "Client Project"
    },
    {
      id: 2,
      title: "Real-time Chat App",
      description: "Built a cross-platform real-time chat application using React Native. Integrated Firebase Authentication with Google Sign-In, reduced login failures by 40% through robust authentication, implemented push notifications using Firebase Cloud Messaging (FCM), and increased user engagement through real-time notifications.",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Chat+App",
      technologies: ["React Native", "Node.js", "Firebase", "Socket.IO", "MongoDB", "FCM"],
      github: "https://github.com/yourusername/chat-app",
      live: "https://chat-app-demo.com",
      category: "Personal Project"
    },
    {
      id: 3,
      title: "Netflix GPT",
      description: "Developed a Netflix clone with AI-powered movie recommendations. Integrated Gemini API for intelligent content suggestions, implemented Firebase authentication and Redux state management, added dynamic movie browsing with TMDB integration, and created interactive UI with hover trailers and instant previews.",
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Netflix+GPT",
      technologies: ["React", "Redux", "Firebase", "Gemini API", "TMDB API", "Tailwind CSS"],
      github: "https://github.com/yourusername/netflix-gpt",
      live: "https://netflix-gpt-demo.com",
      category: "Personal Project"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const getTechnologyIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case 'react':
      case 'react.js':
        return <FaReact />;
      case 'react native':
        return <FaReact />;
      case 'javascript':
      case 'js':
        return <FaJs />;
      case 'html':
        return <FaHtml5 />;
      case 'css':
        return <FaCss3Alt />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="projects-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>My Projects</h2>
            <div className="section-line"></div>
            <p>Here are some of the projects I've worked on recently</p>
          </motion.div>

          <motion.div variants={itemVariants} className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {getTechnologyIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 