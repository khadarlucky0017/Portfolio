import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import { FaLinkedin, FaGithub, FaSlack, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Project from './project'


function App() {
  const [activeTab, setActiveTab] = useState('skills');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_2hlg1yi', // Replace with your EmailJS service ID
        'template_4cdzfs6', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Khadar Shaik'
        },
        'koWVOOmHJqs1hG50t' // Replace with your EmailJS public key
      );

      setShowPopup(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleViewResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1ba8FamIOsZxweTxsZ9XzeRnIFEotToIb/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <a href="#home" className="nav-brand">ByteCraft by Khadar</a>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Me</a>
            <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact Me</a>
          </div>
        </div>
      </nav>

      <section id="home" className="home">
        <div className="home-content">
          <p className="home-greeting">Welcome to my portfolio</p>
          <h1 className="home-title"> <TypeAnimation
            sequence={[
              "Hi, I'm Khadar", // Type the text
              1000,             // Pause (1s)
              "",               // Erase the text
              500,              // Pause before retyping
            ]}
            wrapper="span"
            speed={50} // Typing speed (adjustable)
            repeat={Infinity} // Loop the animation infinitely
            cursor={false}
          /></h1>
          <p className="home-subtitle">Frontend Developer | React JS</p>
          <p className="home-description">
            I build high-performance, responsive web applications with a strong focus on user experience.
            Specialized in React, Next.js, and Modern Javascript to building high-performance, accessible web experiences. <br></br>
            Let's work together to bring your ideas to life.
          </p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
        <div className="home-image">
          <div className="profile-img-container">
            <img
              src="/Khadar17.jpg"
              alt="Profile"
              className="profile-img"
            />
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Discover my journey and expertise</p>

        <p className="about-content">
          Hi, I'm <strong>Khadar Basha Shaik</strong>, a <strong>Frontend Developer</strong> with <strong>4 years of experience</strong> building scalable, high-performance web applications using <strong>React.js, Next.js, and TypeScript</strong>. I specialize in responsive UI development, reusable component architecture, and e-commerce workflows.<br /><br />

          My expertise includes <strong>accessibility standards (WCAG 2.1), Core Web Vitals optimization, and SEO best practices</strong>. I'm passionate about writing clean, maintainable code and delivering seamless user experiences. With a strong focus on performance optimization and full-stack development, I turn complex requirements into scalable solutions. Always eager to learn and adapt to new technologies, I thrive on challenging projects that drive innovation and real-world impact.
        </p>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills & Expertise
          </button>
          <button
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Work Experience
          </button>
          <button
            className={`tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        <div className={`tab-content ${activeTab === 'skills' ? 'active' : ''}`}>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon">🌐</div>
              <h3>Frontend Development</h3>
              <p>React, JavaScript, Next.js, HTML5, CSS3</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🎨</div>
              <h3>UI Libraries</h3>
              <p>material UI, Chakra UI, Tailwind CSS</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">⚙️</div>
              <h3>State Management & API</h3>
              <p>Redux Toolkit, React Query, REST APIs, Axios, Fetch</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">📊</div>
              <h3>Performance & SEO</h3>
              <p>Core Web Vitals, Lighthouse, Accessibility (WCAG 2.1), SEO Optimization</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🛠️</div>
              <h3>Developer Tools</h3>
              <p>Git, GitHub, VS Code, Chrome DevTools, Postman</p>
            </div>
          </div>
        </div>

        <div className={`tab-content ${activeTab === 'experience' ? 'active' : ''}`}>
          <div className="experience-timeline">
            <div className="experience-item">
              <h3>Frontend Developer</h3>
              <p className="company"><b>Cloud Peritus</b></p>
              <p className="period"><b>Aug 2025 - Present</b></p>
              <p>Currently developing high-performance e-commerce applications with focus on accessibility and performance optimization.</p>
              <ul>
                <li>Developed mini-cart functionality with React state management and API integration</li>
                <li>Built reusable UI components using React and Chakra UI with TypeScript type safety</li>
                <li>Built and optimized product listing page filters to improve user experience</li>
                <li>Integrated REST APIs using Axios and Fetch with proper error handling</li>
                <li>Enhanced frontend accessibility by implementing WCAG 2.1 standards using semantic HTML and ARIA roles</li>
                <li>Improved Core Web Vitals by optimizing LCP, CLS, and INP metrics</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Frontend Developer</h3>
              <p className="company"><b>ETG Digital</b></p>
              <p className="period"><b>Aug 2022 - Aug 2025</b></p>
              <p>Led frontend development on major e-commerce projects, building scalable PWA applications and optimizing performance.</p>
              <ul>
                <li>Improved application performance through lazy loading, code splitting, and rendering optimization</li>
                <li>Built reusable UI components and optimized frontend architecture for large-scale applications</li>
                <li>Integrated REST APIs and handled asynchronous data flows efficiently</li>
                <li>Implemented social authentication flows (Google, Facebook login)</li>
                <li>Implemented Google Tag Manager event tracking, capturing 50K+ daily user interactions</li>
                <li>Developed Product Listing Page (PLP) with advanced filtering and infinite scroll</li>
                <li>Achieved 85% unit test coverage using Jest and React Testing Library</li>
                <li>Implemented SEO enhancements with semantic HTML5 and dynamic meta tags</li>
                <li>Collaborated with designers to translate Figma designs into pixel-perfect React components</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`tab-content ${activeTab === 'education' ? 'active' : ''}`}>
          <div className="education-timeline">
            <div className="education-item">
              <h3>Bachelor of Engineering</h3>
              <p className="institution">SKR Engineering College</p>
              <p className="period">2018 - 2022</p>
              <p>Specialized in Computer science and Engineering</p>
              <p>Percentage: 81%</p>
            </div>
            <div className="education-item">
              <h3>Intermediate</h3>
              <p className="institution">Sri Chaitanya Junior College</p>
              <p className="period">2016 - 2018</p>
              <p>Percentage: 94.4%</p>
            </div>
            <div className="education-item">
              <h3>SSC-10th</h3>
              <p className="institution">ZPP High School</p>
              <p className="period">2016 - 2018</p>
              <p>Percentage: 92%</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">What I can do for you</p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">
              Custom web applications built with React, Next.js, and modern frameworks with best practices
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3 className="service-title">Performance Optimization</h3>
            <p className="service-description">
              Optimize Core Web Vitals, improve Lighthouse scores, and enhance user experience
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">
              Responsive, accessible, and beautiful user interfaces with WCAG 2.1 standards
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">♿</div>
            <h3 className="service-title">Accessibility (WCAG)</h3>
            <p className="service-description">
              Implement WCAG 2.1 standards, semantic HTML, and full keyboard navigation support
            </p>
          </div>
        </div>
      </section>

      <Project />

      <section id="contact" className="contact">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Let's discuss your project</p>

        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-heading">Let's create something amazing together</h3>
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <button onClick={handleViewResume} className="download-resume-btn">
              View My Resume
            </button>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-input"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="social-links flex space-x-4">
          <a href="https://linkedin.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} color="#000" />
          </a>
          <a href="https://github.com" className="text-gray-900" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} color="#000" />
          </a>
          <a href="https://slack.com" className="text-green-500" target="_blank" rel="noopener noreferrer">
            <FaSlack size={32} color="#000" />
          </a>
          <a href="https://instagram.com" className="text-pink-500" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} color="#000" />
          </a>
        </div>

        {showPopup && (
          <div className="success-popup">
            Your response will be shared to Khadar Shaik. Thank you!
          </div>
        )}
      </section>
    </>
  );
}

export default App;
