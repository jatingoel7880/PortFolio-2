import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaCode 
} from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const categories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'React Native', 'JavaScript (ES6+)', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase']
    },
    {
      title: 'Development Tools',
      skills: ['Git', 'Agile']
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
        return <FaReact />;
      case 'react native':
        return <FaReact />;
      case 'javascript (es6+)':
        return <FaJs />;
      case 'redux':
        return <FaReact />;
      case 'html5':
        return <FaHtml5 />;
      case 'css3':
        return <FaCss3Alt />;
      case 'tailwind css':
        return <SiTailwindcss />;
      case 'node.js':
        return <FaNodeJs />;
      case 'express.js':
        return <FaNodeJs />;
      case 'mongodb':
        return <SiMongodb />;
      case 'firebase':
        return <SiFirebase />;
      case 'git':
        return <FaGitAlt />;
      case 'agile':
        return <FaCode />;
      default:
        return null;
    }
  };

  const getTechnologyColor = (tech) => {
    switch (tech.toLowerCase()) {
      case 'react':
      case 'react native':
      case 'redux':
        return '#61DAFB';
      case 'javascript (es6+)':
        return '#F7DF1E';
      case 'html5':
        return '#E34F26';
      case 'css3':
        return '#1572B6';
      case 'tailwind css':
        return '#06B6D4';
      case 'node.js':
      case 'express.js':
        return '#339933';
      case 'mongodb':
        return '#47A248';
      case 'firebase':
        return '#FFCA28';
      case 'git':
        return '#F05032';
      case 'agile':
        return '#00BFFF';
      default:
        return '#888888';
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="skills-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>Skills & Technologies</h2>
            <div className="section-line"></div>
            <p>Technologies and tools I work with</p>
          </motion.div>

          <motion.div variants={itemVariants} className="skills-categories">
            {categories.map((category, index) => (
              <div key={index} className="category">
                <h3>{category.title}</h3>
                <div className="category-skills">
                  {category.skills.map((skillName) => (
                    <div key={skillName} className="skill-item">
                      <div className="skill-icon" style={{ color: getTechnologyColor(skillName) }}>
                        {getTechnologyIcon(skillName)}
                      </div>
                      <span>{skillName}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="skills-highlight">
            <div className="highlight-content">
              <h3>Always Learning</h3>
              <p>
                I'm constantly expanding my skill set and staying up-to-date with 
                the latest technologies and best practices in web development. 
                I believe in continuous learning and adapting to new challenges.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 