import { FaEye } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

const Projects = () => {
  return (
    <section id="projects" className="projects-section pt-6">
      <div className="ml-16">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h2 className="project-title">Project 1</h2>
            <p className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              expedita commodi tempora error pariatur dolore natus nam ullam
              quae suscipit! Esse, aspernatur nulla! Error quibusdam
              repudiandae, exercitationem molestiae corrupti autem voluptatum
              aperiam maxime facilis. Deserunt, reprehenderit. Velit non
              aspernatur hic obcaecati, voluptatem voluptas culpa sed dolorem
              iste laboriosam fugiat animi.
            </p>
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
