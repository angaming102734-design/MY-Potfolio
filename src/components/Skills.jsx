function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Bootstrap",
    "GitHub",
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;