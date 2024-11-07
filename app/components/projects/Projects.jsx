import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="projects-section pt-6">
      <div className="ml-16">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
