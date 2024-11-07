import { FaEye } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <h2 className="project-title">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </h2>
      <p className="project-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
        at repellendus quod! Debitis, ducimus eaque.
      </p>
      <div className="project-tags">
        <span className="react-tag project-tag">#react</span>
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
