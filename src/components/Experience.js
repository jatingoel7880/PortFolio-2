import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experience = [
    {
      id: 1,
      type: 'work',
      title: 'Software Engineer',
      company: 'SRM TECHSOL PVT LTD',
      period: 'March 2024 - Present',
      location: 'Lucknow, Uttar Pradesh',
      description: [
        'Developed responsive SPAs using React.js with modern hooks (useState, useEffect, useContext) and functional components for optimal performance',
        'Integrated RESTful APIs and third-party libraries (Axios, React Query) with comprehensive error handling and loading states',
        'Improved application load times by 30% through code-splitting, lazy loading, and bundle optimization techniques',
        'Collaborated with UI/UX designers on Figma-to-React workflows, ensuring pixel-perfect implementation across all devices',
        'Participated in Agile development, contributing to sprint planning, code reviews, and mentoring junior developers'
      ],
      technologies: ['React.js', 'JavaScript (ES6+)', 'RESTful APIs', 'Figma', 'Agile', 'Performance Optimization']
    },
    {
      id: 2,
      type: 'work',
      title: 'Programmer Analyst Trainee',
      company: 'Cognizant',
      period: 'October 2022 - September 2023',
      location: 'Pune, Maharashtra',
      description: [
        'Built dynamic web interfaces using React.js, JavaScript (ES6+), HTML5, and CSS3 following industry best practices',
        'Enhanced code quality by 15% through peer reviews, ESLint implementation, and consistent coding standards',
        'Developed reusable React component library with 20+ components, reducing UI development time by 30%',
        'Implemented performance optimizations using Redux, Context API, and bundle optimization strategies',
        'Integrated RESTful APIs with Axios, implementing robust error handling, loading states, and data validation'
      ],
      technologies: ['React.js', 'JavaScript (ES6+)', 'Axios', 'Redux', 'Context API', 'ESLint', 'Component Library']
    }
  ];

  const education = [
    {
      id: 1,
      type: 'education',
      title: 'B.Tech (Electronics and Instrumentation Engineering)',
      institution: 'Dr. A.P.J Abdul Kalam Technical University',
      period: '2018 - 2022',
      location: 'Ghaziabad, Uttar Pradesh',
      achievements: ['CGPA: 8.9/10', 'Excellent Academic Performance']
    },
    // {
    //   id: 2,
    //   type: 'education',
    //   title: 'Web Development Bootcamp',
    //   institution: 'Code Academy',
    //   period: '2021',
    //   location: 'Online',
    //   achievements: ['Top 5% of Class', 'Best Capstone Project']
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const renderTimelineItem = (item) => (
    <motion.div
      key={item.id}
      className={`timeline-item ${item.type}`}
      variants={itemVariants}
    >
      <div className="timeline-marker">
        {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
      </div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h3>{item.title}</h3>
          <div className="timeline-meta">
            <span className="company">{item.company || item.institution}</span>
            <div className="timeline-details">
              <span className="period">
                <FaCalendarAlt />
                {item.period}
              </span>
              <span className="location">
                <FaMapMarkerAlt />
                {item.location}
              </span>
            </div>
          </div>
        </div>
        {item.description && (
          <div className="timeline-description">
            <ul>
              {item.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        )}
        {item.technologies && (
          <div className="timeline-technologies">
            {item.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
        {item.achievements && (
          <div className="timeline-achievements">
            <h4>Achievements:</h4>
            <ul>
              {item.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="experience-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>Experience & Education</h2>
            <div className="section-line"></div>
            <p>My professional journey and academic background</p>
          </motion.div>

          <div className="experience-grid">
            <motion.div variants={itemVariants} className="work-experience">
              <h3>Work Experience</h3>
              <div className="timeline">
                {experience.map(renderTimelineItem)}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="education">
              <h3>Education</h3>
              <div className="timeline">
                {education.map(renderTimelineItem)}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="experience-highlight">
            <div className="highlight-content">
              <h3>Career Goals</h3>
              <p>
                I'm passionate about creating impactful web and mobile applications and 
                continuously improving my skills. My goal is to lead innovative 
                projects that make a difference in people's lives while 
                contributing to the growth of the development community.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 