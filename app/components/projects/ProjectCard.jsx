import { FaEye } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{project?.title}</h2>
      <p className="project-description">{project?.description}</p>
      <div className="project-tags">
        {project?.tags?.map((tag) => (
          <span className=" project-tag mr-2 bg-white" key={tag.value}>
            #{tag.value}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a className="project-button" href="#">
          <span>
            <IoCodeSlash />
          </span>
          Code
        </a>
        <a className="project-button" href="#">
          <span>
            <FaEye />
          </span>
          Live Preview
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
