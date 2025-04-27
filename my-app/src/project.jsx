import React from 'react';
import './project.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">Some of the work I've done</p>

      <div className="projects-grid">
        <div className="project-card">
          <a href="https://telugumedium.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="project-box">
              <img 
                src="./logo.jpg" 
                alt="Telugu Medium eCommerce Website"
                className="project-thumbnail"
              />
              <p className="project-description">
                An Ecommerce platform for Telugu region Cusines.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
