import ProjectCard from "./ProjectCard";

const Projects = async () => {
  const projectLists = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/project`
  );
  const projects = await projectLists.json();
  return (
    <section id="projects" className="projects-section pt-6">
      <div className="ml-16">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
