function Projects() {
  const projects = [
    "Count app",
    "Todo App",
    "sign-22",
    "Portfolio Website", 
   <a className="teat" href="https://chipper-croissant-4e1b8c.netlify.app/">My Data App</a>
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project}>
            <h3>{project}</h3>
            <p>
              React based responsive project with modern UI.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;