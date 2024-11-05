import Image from "next/image";
import myThumbnail from "@/public/images/me.png";
import { FaCode } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h1 className="section-title">Badhan Samadder Joy</h1>
        <h2>
          <span>
            <FaCode size={"1.7rem"} className="code-icon" />
          </span>{" "}
          Frontend Developer{" "}
          <span>
            <FaCode size={"1.7rem"} className="code-icon" />
          </span>
        </h2>

        <p className="about-para">
          A passionate front-end web developer. Loves trying new technologies.
        </p>
      </div>
      <div className="about-image">
        <Image src={myThumbnail} alt="hero thumbnail" />
      </div>
    </section>
  );
};

export default About;