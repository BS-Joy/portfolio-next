"use client";
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import tailwindThumbnail from "@/public/images/tailwind.png";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { IconContext } from "react-icons";

const SkillSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skill-text">
        <h2 className="section-title skill-title">Skills</h2>
      </div>
      <div className="skills-list">
        <div className="skill-card html">
          <IconContext.Provider
            value={{
              style: {
                filter: "drop-shadow(4px 13px 9px #131617)",
              },
              className: "skill-icon",
            }}
          >
            <FaHtml5 size={"50px"} />
          </IconContext.Provider>
          <p>Html</p>
        </div>
        <div className="skill-card css">
          <IconContext.Provider
            value={{
              style: {
                filter: "drop-shadow(4px 13px 9px #131617)",
              },
              className: "skill-icon",
            }}
          >
            <FaCss3Alt size={"50px"} />
          </IconContext.Provider>
          <p>CSS</p>
        </div>
        <div className="skill-card bootstrap">
          <IconContext.Provider
            value={{
              style: {
                filter: "drop-shadow(4px 13px 9px #131617)",
              },
              className: "skill-icon",
            }}
          >
            <FaBootstrap size={"50px"} />
          </IconContext.Provider>
          <p>Bootstrap</p>
        </div>
        <div className="skill-card tailwind">
          <Image src={tailwindThumbnail} alt="tailwind" />
          <p>Tailwind</p>
        </div>
        <div className="skill-card javascript">
          <IconContext.Provider
            value={{
              style: {
                filter: "drop-shadow(4px 13px 9px #131617)",
              },
              className: "skill-icon",
            }}
          >
            <FaJsSquare size={"50px"} />
          </IconContext.Provider>
          <p>Javascript</p>
        </div>
        <div className="skill-card react">
          <IconContext.Provider
            value={{
              style: {
                filter: "drop-shadow(4px 13px 9px #131617)",
              },
              className: "skill-icon",
            }}
          >
            <FaReact size={"50px"} />
          </IconContext.Provider>
          <p>React</p>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
