import React from "react";
import "./project.css";

function Projects() {
  const projects = [
    {
      title: "Global Entertainment Anime Merchandise Store",
      description:
        "Built scalable e-commerce frontend experiences with advanced PLP filtering, React Query integration, reusable UI components, and Core Web Vitals optimization.",
      tech: "React.js • TypeScript • Chakra UI • React Query",
    },

    {
      title: "Internal PWA Accelerator",
      description:
        "Developed a modular Progressive Web App architecture with reusable components, REST API integration, Lighthouse optimization, and scalable frontend structure.",
      tech: "React.js • JavaScript • Axios • PWA",
    },

    {
      title: "Global Outdoor Sports Apparel Brand",
      description:
        "Implemented mini-cart functionality, responsive UI components, accessibility improvements, and frontend performance optimization for large-scale e-commerce applications.",
      tech: "React.js • Chakra UI • Accessibility • Axios",
    },

    {
      title: "Telugu Medium eCommerce Website",
      description:
        "A personal e-commerce platform focused on Telugu regional cuisines with responsive UI design and modern frontend development practices.",

      tech: "React.js • CSS • Responsive Design",

      type: "Personal Project",

      link: "https://telugumedium.netlify.app/",
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>

      <p className="section-subtitle">
        Professional and personal projects focused on scalable frontend
        development, performance optimization, and modern user experiences.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-content">

              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                )}
              </div>

              {project.type && (
                <span className="project-type">
                  {project.type}
                </span>
              )}

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-tech">
                {project.tech}
              </p>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
