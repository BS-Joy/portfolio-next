import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section id="contacts" className="contact-section">
      <div className="ml-16">
        <h2 className="section-title interests-title">Contact</h2>
        <div className="social">
          <div className="connect github">
            <FaGithub size={"1.3rem"} color="white" />
            <a href="https://github.com/BS-Joy" target="_blank">
              Github
            </a>
          </div>
          <div className="connect linkd">
            <FaLinkedin size={"1.3rem"} color="#0A66C2" />
            <a
              href="https://www.linkedin.com/in/badhan-samadder-joy-a35173190/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="connect stack">
            <FaStackOverflow size={"1.3rem"} color="#F48024" />
            <a
              href="https://stackoverflow.com/users/14042888/bs-joy"
              target="_blank"
            >
              Stack-overflow
            </a>
          </div>
          <div className="connect twt">
            <FaXTwitter size={"1.3rem"} color="#E7E9EA" />
            <a href="https://twitter.com/badhan_samadder" target="_blank">
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
