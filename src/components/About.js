import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaCode, FaHeart, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="about-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>About Me</h2>
            <div className="section-line"></div>
          </motion.div>

          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-text">
              <h3>Passionate Frontend Developer</h3>
              <p>
                A passionate Frontend Developer with 2+ years of experience in crafting modern web applications and mobile solutions. I specialize in building responsive, user-friendly interfaces using cutting-edge technologies like React and React Native.
              </p>
              <p>
                My journey in frontend development has equipped me with a strong foundation in creating engaging user interfaces and interactive web applications. I take pride in writing clean, maintainable code and implementing industry best practices to deliver high-quality solutions.
              </p>
              <p>
                I'm particularly interested in creating seamless user experiences and optimizing application performance. My approach combines technical expertise with a keen eye for detail, ensuring that every project I work on meets the highest standards of quality and efficiency.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="about-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <FaCode />
                </div>
                <div className="stat-content">
                  <h4>2+ Years</h4>
                  <p>Experience</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <FaRocket />
                </div>
                <div className="stat-content">
                  <h4>Continuous</h4>
                  <p>Learning</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <FaHeart />
                </div>
                <div className="stat-content">
                  <h4>100%</h4>
                  <p>Dedication</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="about-features">
            <div className="feature">
              <FaUser className="feature-icon" />
              <h4>Performance Optimization</h4>
              <p>Creating seamless user experiences with optimized application performance and UI/UX excellence</p>
            </div>
            <div className="feature">
              <FaCode className="feature-icon" />
              <h4>Clean Code</h4>
              <p>Writing maintainable, scalable code with modern development practices and tools</p>
            </div>
            <div className="feature">
              <FaRocket className="feature-icon" />
              <h4>API Integration</h4>
              <p>Seamlessly connecting frontend applications with backend services and third-party APIs</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 