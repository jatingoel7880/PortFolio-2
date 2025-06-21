import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, 
  FaLinkedin, FaInstagram, FaPaperPlane 
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Modal from './Modal';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("Vy8EyK1zbi1roWDC-");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      console.log('Sending email with data:', formData);
      
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const result = await emailjs.send(
        'service_79m30s4',
        'template_vg0vss4',
        templateParams
      );

      console.log('EmailJS Response:', result);
      
      if (result.text === 'OK') {
        setFormData({ name: '', email: '', message: '' });
        setShowModal(true);
        
        // Auto-close modal after 2 seconds
        setTimeout(() => {
          setShowModal(false);
        }, 2000);
      } else {
        console.error('EmailJS returned non-OK status:', result);
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'jating.0311@gmail.com',
      link: 'mailto:jating.0311@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91-7880362153',
      link: 'tel:+91-7880362153'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Lucknow, Uttar Pradesh',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/jatingoel7880',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jatin-goel-3a28881b9',
      color: '#0077B5'
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://www.instagram.com/jatingoel03/',
      color: '#E4405F'
    }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="contact-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2>Get In Touch</h2>
            <div className="section-line"></div>
            <p>Let's work together on your next project</p>
          </motion.div>

          <div className="contact-grid">
            <motion.div variants={itemVariants} className="contact-info">
              <h3>Contact Information</h3>
              <div className="info-items">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <div className="info-icon">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link}>{info.value}</a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{ '--social-color': social.color }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="contact-form">
              <h3>Send Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
              
              {submitStatus.message && (
                <motion.div
                  className={`submit-status ${submitStatus.type}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="contact-highlight">
            <div className="highlight-content">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to 
                say hello, feel free to reach out. I'll get back to you as soon as possible!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Thank You!"
        message="Your message has been sent successfully! I'll get back to you soon."
      />
    </section>
  );
};

export default Contact; 